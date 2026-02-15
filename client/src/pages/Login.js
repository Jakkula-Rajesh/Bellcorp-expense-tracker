import { useState } from "react";
import { loginUser } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await loginUser({ email, password });
    if (res.token) {
      localStorage.setItem("token", res.token);
      window.location.href = "/";
    } else {
      alert(res.message);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      <p style={{ textAlign: "center" }}>
        New user? <Link to="/register">Register here</Link>
      </p>

    </form>
  );
}

export default Login;
