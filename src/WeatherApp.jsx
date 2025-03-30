import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo,setWeatherInfo] = useState({
        city: 'Delhi',
        temp: 35.26,
        feelsLike: 32.55,
        tempMin: 35.26,
        tempMax: 35.26,
        humidity: 4,
        weather: "clear sky"
    });

    function updateInfo(newInfo) {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}