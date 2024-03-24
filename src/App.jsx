import { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import PoweredBy from './PoweredBy';

export default function App() {
  
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h2" color="primary" align="center" gutterBottom>
        Weather App
      </Typography>
      
      <WeatherForm 
        setWeather={setWeather}
      />
      
      {weather.city && (
        <WeatherInfo weather={weather}/>
      )}
      
      <PoweredBy />
      
    </Container>
  );
}