import TextField from '@mui/material/TextField';
import './SearchBox.css'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const apiKey = import.meta.env.VITE_API_KEY;
    let [city,setCity] = useState('');
    let [err,setErr] = useState(false);
    let url = "https://api.openweathermap.org/data/2.5/weather?";

    function handleCity(event) {
        setCity(event.target.value);
    }

    async function handleForm (event) {
        event.preventDefault();
        try{
            let response = await fetch(`${url}q=${city}&appid=${apiKey}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_min,
                tempMin: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            updateInfo(result);
            setCity('');
            setErr(false);
        }catch(err) {
            setErr(true);
            setCity('');
        }
    }


    return (
        <div className='searchBox'>
            <h1>Weather App</h1>
            <form onSubmit={handleForm} >
                <TextField required id="outlined-basic" onChange={handleCity} value={city} label="City Name" variant="outlined" />
                <br /><br />
                <Button variant="contained" type='Submit'>Search</Button>
            </form>
            {err && (
                <Alert severity="error" sx={{ maxWidth: "300px", margin: "10px auto" }}>
                    No such place exists in the API
                </Alert>)}
        </div>
    )
}