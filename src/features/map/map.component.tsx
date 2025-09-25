import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import styles from './map.module.scss'

export const Map = () => {
  return (
  <MapContainer 
    center={[54.6872, 25.2797]}
    zoom={13}
    scrollWheelZoom={false}
    className={styles.leafletMap}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[54.6872, 25.2797]}>
        <Popup>
          Privetuli
      </Popup>
    </Marker>
  </MapContainer>
  )
}