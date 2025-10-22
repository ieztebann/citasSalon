import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Beauty Studio</h1>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Testimonios</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}
