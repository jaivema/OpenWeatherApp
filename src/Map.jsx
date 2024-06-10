import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

/*
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Solucionar problemas con los iconos de marcador de Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})
*/

//renderizar la nueva marca
function RecenterMap({ lat, lon }) {
  const map = useMap()
  useEffect(() => {
    if (lat != null && lon != null) {
      map.setView([lat, lon])
    }
  }, [lat, lon, map])
  return null
}

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
      <RecenterMap lat={lat} lon={lon} />
    </MapContainer>
  )
}

export default Map

