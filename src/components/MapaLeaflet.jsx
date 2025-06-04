import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import './Mapa.css';


export default function MapaLeaflet() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      () => {
        setPosition([-23.55, -46.63]); // fallback pra SP
      }
    );
  }, []);

  if (!position) return <p>Carregando mapa...</p>;

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Você está aqui</Popup>
      </Marker>
    </MapContainer>
  );
}
