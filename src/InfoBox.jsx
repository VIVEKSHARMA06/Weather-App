import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let hotUrl = "https://images.unsplash.com/photo-1542923910-f391dea9f674?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rainUrl = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let coldUrl = "https://images.unsplash.com/photo-1530179123598-38d05c67c1b1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="infoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity>80 ? rainUrl : (info.temp>15 ? hotUrl : coldUrl)
                        }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity>80 ? <ThunderstormIcon/> : (info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/>)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature = {info.temp}&deg;</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;</p>
                            <p>Max Temp = {info.tempMax}&deg;</p>
                            <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;</p>
                        </Typography>
                    </CardContent>
                    </Card>
            </div>
        </div>
    )
}