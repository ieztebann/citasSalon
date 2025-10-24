import { useState } from "react";
import "./NuevaCita.scss";

const NuevaCita = () => {
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    especialidad: "",
    profesional: "",
    comentarios: ""
  });

  const especialidades = ["Corte de cabello", "Manicure", "Peinado", "Coloración"];
  const profesionales = ["Ana", "Carlos", "Lucía", "Javier"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de la cita:", formData);
    alert("¡Cita registrada exitosamente!");
    // Aquí puedes enviar los datos a tu backend
  };

  return (
    <div className="nueva-cita-container">
      <h2>Agendar Nueva Cita</h2>
      <form className="nueva-cita-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha:</label>
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Hora:</label>
          <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Especialidad:</label>
          <select name="especialidad" value={formData.especialidad} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            {especialidades.map((esp) => (
              <option key={esp} value={esp}>{esp}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Profesional:</label>
          <select name="profesional" value={formData.profesional} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            {profesionales.map((pro) => (
              <option key={pro} value={pro}>{pro}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Comentarios:</label>
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            placeholder="Opcional..."
          />
        </div>

        <button type="submit" className="submit-btn">Agendar Cita</button>
      </form>
    </div>
  );
};

export default NuevaCita;
