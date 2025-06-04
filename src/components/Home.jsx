import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <h1>Pluvios</h1>
      </header>

      <div className="home-container">
        <h1 className="titulo">Bem-vindo ao Pluvios</h1>
        <p className="descricao">
          Aqui você nos reporta o desastre que ocorreu para podermos ajudar.
        </p>
        <div className="botoes">
          <button onClick={() => navigate("/Login")}>Login</button>
          <button onClick={() => navigate("/Register")}>
            Não tem cadastro? Faça clicando aqui.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
