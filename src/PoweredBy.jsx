import Typography from '@mui/material/Typography';

function PoweredBy() {
    return (
        <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
            Powered by:{" "}
            <a href="https://api.openweathermap.org/" 
            title="Open Weather API">
                
                OpenWeather API
            </a>
        </Typography>
    );
}
export default PoweredBy;