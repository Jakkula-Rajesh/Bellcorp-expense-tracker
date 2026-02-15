import { Link, useNavigate } from "react-router-dom";
import "../styles/common.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h3>Expense Tracker</h3>

      <div>
        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/explorer">Explorer</Link>
            <button onClick={logoutUser}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
