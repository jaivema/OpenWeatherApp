import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Map from './Map'

const flagUrl = 'https://openweathermap.org/images/flags/'
const iconUrl = 'https://openweathermap.org/img/wn/'

function WeatherInfo({weather}){
    return(
        <Box sx={{mt: 2, display: "grid", gap: 2, textAlign: "center"}}>
            <Typography variant="h3" component="h2">
                {
                    weather.city
                }{" "}
                <Box
                    component="img"
                    alt={weather.city}
                    src={`${flagUrl}${weather.country.toLowerCase()}.png`}
                    sx={{ margin: "0 auto" }}
                />
            </Typography>
          
            <Box
                component="img"
                alt={weather.conditionText}
                src={`${iconUrl}${weather.icon}@2x.png`}
                sx={{ margin: "0 auto" }}
            />

            <Typography variant="h6" component="h4">
                {
                    weather.conditionText.charAt(0).toUpperCase()
                }
                {
                    weather.conditionText.slice(1)
                }
            </Typography>

            <Typography variant="h3" component="h2">
                {
                    weather.temperature
                } °C
            </Typography>
            <Map  weather={weather} />
            <Typography variant="h5" component="h4">
                <ul>
                    <li style={{display: 'inline-block', margin: '10px'}}>
                        Max: {
                            weather.temp_max
                        } °C
                    </li>
                    <li style={{display: 'inline-block', margin: '10px'}}>
                        Min: {
                            weather.temp_min
                        } °C
                    </li>
                </ul>
            </Typography>
            
            <Typography variant="h5" component="h3">
                Humedad: {
                    weather.humidity
                } %
            </Typography>
            <Typography variant="h5" component="h3">
                {
                    weather.pressure
                } hPa
            </Typography>
        </Box>
    )
}
export default WeatherInfo