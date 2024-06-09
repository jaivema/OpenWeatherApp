import Typography from '@mui/material/Typography'

function PoweredBy() {
    return (
        <Typography textAlign="center" sx={{ mt: 1, fontSize: "12px" }}>
            {"2024 nanok, Powered by: "} 
            <a href="https://api.openweathermap.org/" title="Open Weather API">             
                Open Weather API
            </a>
            {" & "}
            <a href="https://www.openstreetmap.org/" title="Open Street Map">
                Open Street Map
            </a>
        </Typography>
    )
}
export default PoweredBy