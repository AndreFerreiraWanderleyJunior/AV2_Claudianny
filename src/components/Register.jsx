import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate("/MapaComReport");
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
      console.error(error); // Isso ajuda a ver o código de erro exato
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleRegister}>
        <h2>Faça seu cadastro</h2>
        <input name="nome" placeholder="Nome completo" required />
        <input name="endereco" placeholder="Endereço" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Senha" required />
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}

export default Register;
