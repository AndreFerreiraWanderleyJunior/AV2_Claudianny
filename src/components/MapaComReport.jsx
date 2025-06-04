import { useNavigate } from "react-router-dom";
import Map from "./MapaLeaflet";
import './Mapa.css';


export default function MapaComReport() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        gap: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "400px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Map />
      </div>
        <h1>Bem Vindo</h1>
      <button
        onClick={() => navigate("/report")}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        Reportar
      </button>
    </div>
  );
}
