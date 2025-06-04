import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Report from "./components/Report";
import Map from "./components/MapaLeaflet";
import MapaComReport from "./components/MapaComReport";
import ReportSuccess from "./components/ReportSuccess";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/mapacomreport" element={<MapaComReport />} />
        <Route path="/report-success" element={<ReportSuccess />} />
        <Route
          path="/Mapa"
          element={
            <div style={{ height: "100vh", width: "100vw" }}>
              <Map />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
