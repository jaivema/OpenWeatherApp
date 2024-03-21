import { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import PoweredBy from './PoweredBy';

const apiUrl  = import.meta.env.VITE_API_URL;
const apiKey  = import.meta.env.VITE_API_KEY;


export default function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, isLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    isLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo Ciudad es obligatorio" };

      const response = await axios.get(apiUrl + city + '&appid=' + apiKey);
      const data = await response.data;

      console.log(data);

      if (data.error) {
        throw { message: data.error.message };
      }
      
      let temp2 = data.main.temp / 10
      let temp = temp2.toFixed(2);

      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: temp,
        condition: data.weather.main,
        conditionText: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.log(error);
      setError({ error: true, message: error.message });
    } finally {
      isLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h2" color="primary" align="center" gutterBottom>
        Weather App
      </Typography>
      
      <WeatherForm 
        onSubmit={onSubmit}
        city={city}
        setCity={setCity}
        error={error}
        loading={loading}
      />
      
      {weather.city && (
        <WeatherInfo weather={weather}/>
      )}
      
      <PoweredBy />
      
    </Container>
  );
}