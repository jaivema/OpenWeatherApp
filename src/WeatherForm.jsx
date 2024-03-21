import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

function WeatherForm( {onSubmit, city, setCity, error, loading} ) {
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
    );
}export default WeatherForm;