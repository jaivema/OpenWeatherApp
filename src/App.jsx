import { LoadingButton } from '@mui/lab';
import { Box, Container, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import axios from 'axios';

const apiUrl  = import.meta.env.VITE_API_URL;
const apiKey  = import.meta.env.VITE_API_KEY;
const flagUrl = import.meta.env.VITE_FLAG_URL;
const iconUrl = import.meta.env.VITE_ICON_URL;


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
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };
      
      const response = await axios.get(apiUrl + city + '&appid=' + apiKey);
      const data = await response.data;

      //console.log(data);

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
    <Container
      maxWidth="xs"
      sx={{ mt: 2 }}
    >
      <Typography 
        variant="h2" 
        color="primary" 
        align="center"
        gutterBottom
      >
        Weather App
      </Typography>
      
      <Box
        sx={{ display: "grid", gap: 2 }}
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
      </Box>

      {weather.city && (
        <Box
          sx={{
            mt: 2,
            display: "grid",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
          >
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
          <Typography
            variant="h6"
            component="h4"
          >
            {/*Primera letra capital*/}
            {weather.conditionText.charAt(0).toUpperCase()}
            {/*Resto del texto*/}
            {weather.conditionText.slice(1)}
          </Typography>
          <Typography
            variant="h5"
            component="h3"
          >
            {weather.temperature} °C
          </Typography>
        </Box>
      )}

      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
      >
        Powered by:{" "}
        <a
          href="https://api.openweathermap.org/"
          title="Open Weather API"
        >
          OpenWeather API
        </a>
      </Typography>
    </Container>
  );
}