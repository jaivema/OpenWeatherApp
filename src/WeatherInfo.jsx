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
                {weather.conditionText.charAt(0).toUpperCase()}
                {weather.conditionText.slice(1)}
            </Typography>

            <Typography variant="h5" component="h3">
                Temperatura: {weather.temperature} °C
            </Typography>
            <Typography variant="h5" component="h3">
                Max: {weather.temp_max} °C
            </Typography>
            <Typography variant="h5" component="h3">
                Min: {weather.temp_min} °C
            </Typography>
            <Typography variant="h5" component="h3">
                Humedad: {weather.humidity} %
            </Typography>
            <Typography variant="h5" component="h3">
                Presión atmos.: {weather.pressure}
            </Typography>
        </Box>
    )
}export default WeatherInfo;