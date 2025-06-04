import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Report.css";

const disasters = [
  { id: "flood", label: "enchente", img: "/images/enchente.jpg" },
  { id: "fire", label: "incendio", img: "/images/incendio.jpg" },
  { id: "earthquake", label: "terremoto", img: "/images/terremoto.jpg" },
  { id: "storm", label: "tempestade", img: "/images/tempestade.jpg" },
];

function Report() {
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDisaster) {
      alert("Por favor, selecione um tipo de desastre.");
      return;
    }
    setLoading(true);
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const userEmail = user ? user.email : "desconhecido";

      await addDoc(collection(db, "reports"), {
        disasterType: selectedDisaster,
        userEmail: userEmail,
        createdAt: Timestamp.now(),
      });
      navigate("/MapaComReport");
    } catch (error) {
      alert("Erro ao enviar report: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="report-page">
      <form onSubmit={handleSubmit} className="report-form">
        <h2>Selecione o tipo de desastre</h2>
        <div className="buttons-container">
          {disasters.map(({ id, label, img }) => (
            <button
              type="button"
              key={id}
              className={`disaster-button ${
                selectedDisaster === id ? "selected" : ""
              }`}
              onClick={() => setSelectedDisaster(id)}
            >
              <img src={img} alt={label} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}

export default Report;
