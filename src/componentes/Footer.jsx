import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="img/iconos/logo.png" alt="Logo" className="footer-icon" />
          <h2 className="footer-title">Amor & Belleza</h2>
        </div>

        <ul className="footer-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Testimonios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>

        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Amor & Belleza. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
