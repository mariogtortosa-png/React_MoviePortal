import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <nav className="navbar-brand">
        <Link to="/">APP PELICULAS</Link>
      </nav>
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/favorites" className="navbar-link">
          Favoritos
        </Link>
      </nav>
    </nav>
  );
}

export default NavBar;
