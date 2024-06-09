import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

function Map({ weather }) {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [city, setCity] = useState('')

  useEffect(() => {
    if (weather) {
      setLat(weather.lat)
      setLon(weather.lon)
      setCity(weather.city)
    }
  }, [weather])

  if (lat == null || lon == null) {
    return <div>Error: Latitud y Longitud no disponibles.</div>
  }

  return (
    <MapContainer center={[lat, lon]} zoom={5} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=f6a863c3e80a20999b295bbd29db8da5`}
      />
      <Marker position={[lat, lon]}>
        <Popup>
        {`Información meteorológica para ${city}.`}
        </Popup>
      </Marker>
    </MapContainer>
  )
}
export default Map