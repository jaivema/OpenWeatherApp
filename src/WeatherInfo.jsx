import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const flagUrl = import.meta.env.VITE_FLAG_URL;
const iconUrl = import.meta.env.VITE_ICON_URL;

function WeatherInfo({weather}){
    return(
        
        <Box sx={{mt: 2, display: "grid", gap: 2, textAlign: "center"}}>
            <Typography variant="h3" component="h2">
                {weather.city}
            </Typography>
          
            <Box
                component="img"
                alt="..."
                src={`${flagUrl}${weather.country.toLowerCase()}.png`}
                sx={{ margin: "0 auto" }}
            />

            <Box
                component="img"
                alt={weather.conditionText}
                src={`${iconUrl}${weather.icon}@2x.png`}
                sx={{ margin: "0 auto" }}
            />

            <Typography variant="h6" component="h4">
                {/*Primera letra capital*/}
                {weather.conditionText.charAt(0).toUpperCase()}
                {/*Resto del texto*/}
                {weather.conditionText.slice(1)}
            </Typography>

            <Typography variant="h5" component="h3">
                {weather.temperature} °C
            </Typography>
        </Box>
    )
}export default WeatherInfo;