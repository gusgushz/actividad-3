import { NavLink } from "react-router";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categorías</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Mis favoritos</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};
