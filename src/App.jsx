import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import WeatherForm from './WeatherForm'
import PoweredBy from './PoweredBy'

export default function App() {
  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>

      <Typography variant="h2" color="primary" align="center" gutterBottom>
        Open Weather App
      </Typography>

      <WeatherForm />

      <PoweredBy />      

    </Container>
  );
}