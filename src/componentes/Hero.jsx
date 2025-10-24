import { Link } from "react-router-dom"
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Realza tu Belleza Natural</h1>
        <p>Tratamientos personalizados para resaltar tu rostro, pestañas y cejas.</p>
         <Link to="/Serenity-SPA/dashboard">
        <button>Agenda tu cita</button></Link>
      </div>
    </section>
  );
}
