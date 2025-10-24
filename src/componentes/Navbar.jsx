import { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuAbierto(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">MiApp</div>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Testimonios</li>
        <li>Contacto</li>
      </ul>

      <div
        className="user-menu"
        ref={menuRef}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <FaUser className="user-icon" />
         <div className={`dropdown ${menuAbierto ? "show" : ""}`}>
  <Link to="/Serenity-SPA/login" className="dropdown-link">Iniciar Sesión</Link>
  <Link to="/Serenity-SPA/Registro" className="dropdown-link">Regístrate</Link>
</div>
      </div>
    </nav>
  );
}
