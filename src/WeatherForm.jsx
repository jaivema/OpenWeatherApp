import { useState } from 'react';

import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import WeatherInfo from './WeatherInfo';

import axios from 'axios';

const apiUrl  = import.meta.env.VITE_API_URL;
const appiKey  = import.meta.env.VITE_API_KEY;
const units = '&units=metric';
const appid = '&appid='+`${appiKey}`;

function WeatherForm() {
    const [weather, setWeather] = useState({
        city: "",
        country: "",
        temperature: 0,
        temp_max: 0,
        temp_min: 0,
        condition: "",
        conditionText: "",
        humidity: 0,
        pressure: 0,
      });
    const [citySearch, setCitySearch] = useState("");
    const [error, setError] = useState({
        error: false,
        message: "",
    });
    const [loading, isLoading] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        setError({ error: false, message: "" });
        isLoading(true);
    
        try {
            if (!citySearch.trim()) throw { message: "El campo Ciudad es obligatorio" };
        
            const response = await axios.get(
                `${apiUrl}${citySearch}${units}${appid}`
                );
                 
            const data = await response.data;

 {/*CONSOLE.LOG(DATA)*/}
            console.log(data);
        
            setWeather({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                condition: data.weather.main,
                conditionText: data.weather[0].description,
                icon: data.weather[0].icon,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,

            });
        } catch (error) {
            console.log(error);
            setError({ error: true, message: error.response.data.message });
        } finally {
            isLoading(false);
        }
      };
    return (
        <Box sx={{ display: "grid", gap: 2 }}
            component="form"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <TextField
                id="city"
                label="Ciudad"
                variant="outlined"
                size="small"
                required
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
                error={error.error}
                helperText={error.message}
            />
            <LoadingButton 
                type="submit" 
                variant="contained"
                loading={loading}
                loadingIndicator="Buscando..."
                endIcon={<SendIcon/>}
            >
                Buscar
            </LoadingButton>

            {weather.city && (
                <WeatherInfo weather={weather}/>
            )}
        </Box>
    );
}export default WeatherForm;