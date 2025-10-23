import React from "react";
import "./InfoBar.css";
import { FaTruck, FaCreditCard, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const InfoBanner = () => {
  return (
    <section className="info-banner">
      <div className="info-item">
        <FaTruck className="info-icon" />
        <div>
          <h3>ENVÍOS NACIONALES</h3>
          <p>Realizamos envíos a toda Colombia</p>
        </div>
      </div>

      <div className="info-item">
        <FaCreditCard className="info-icon" />
        <div>
          <h3>MEDIOS DE PAGO WEB</h3>
          <p>Tarjetas de Crédito, Débito, Nequi y PSE</p>
        </div>
      </div>

      <div className="info-item">
        <FaPhoneAlt className="info-icon" />
        <div>
          <h3>CONTACTO</h3>
          <p>Tienda Online: 3103063522</p>
        </div>
      </div>

      <div className="info-item">
        <FaMapMarkerAlt className="info-icon" />
        <div>
          <h3>VISÍTANOS</h3>
          <p>Calle 105 #48b-40 Bogotá, Colombia</p>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
