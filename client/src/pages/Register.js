import { useState } from "react";
import { registerUser } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();

  const res = await registerUser({ name, email, password });

  if (res.token) {
    localStorage.setItem("token", res.token);
    window.location.href = "/";
  } else {
    alert(res.message);
  }
};

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
      <p style={{ textAlign: "center" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </form>
  );
}

export default Register;
