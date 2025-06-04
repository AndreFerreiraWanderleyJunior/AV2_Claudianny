import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/MapaComReport");
    } catch (error) {
      alert("Erro ao logar: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Faça seu login</h2>
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
