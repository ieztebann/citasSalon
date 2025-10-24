import { useState } from "react";
import "./CitasPendientes.scss";

const CitasPendientes = () => {
  const initialCitas = [
    { id: 1, fecha: "2025-10-25", hora: "10:00", especialidad: "Corte de cabello", profesional: "Ana", estado: "Pendiente" },
    { id: 2, fecha: "2025-10-26", hora: "14:00", especialidad: "Manicure", profesional: "Lucía", estado: "Confirmada" },
    { id: 3, fecha: "2025-10-27", hora: "11:30", especialidad: "Peinado", profesional: "Carlos", estado: "Pendiente" },
    { id: 4, fecha: "2025-10-28", hora: "09:00", especialidad: "Coloración", profesional: "Javier", estado: "Cancelada" }
  ];

  const [citas, setCitas] = useState(initialCitas);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEstado, setFilterEstado] = useState("Todos");

  const filteredCitas = citas.filter((cita) => {
    const matchesSearch = Object.values(cita).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesEstado = filterEstado === "Todos" || cita.estado === filterEstado;
    return matchesSearch && matchesEstado;
  });

  const handleCancelar = (id) => {
    const confirmCancel = window.confirm("¿Deseas cancelar esta cita?");
    if (!confirmCancel) return;
    setCitas(prevCitas =>
      prevCitas.map(cita =>
        cita.id === id ? { ...cita, estado: "Cancelada" } : cita
      )
    );
  };

  return (
    <div className="citas-container">
      <h2>Citas Pendientes</h2>

      <div className="citas-filtros">
        <input
          type="text"
          placeholder="Buscar cita..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={filterEstado} onChange={(e) => setFilterEstado(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Confirmada">Confirmada</option>
          <option value="Cancelada">Cancelada</option>
        </select>
      </div>

      <table className="citas-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Especialidad</th>
            <th>Profesional</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitas.length > 0 ? (
            filteredCitas.map((cita) => (
              <tr key={cita.id}>
                <td>{cita.fecha}</td>
                <td>{cita.hora}</td>
                <td>{cita.especialidad}</td>
                <td>{cita.profesional}</td>
                <td>{cita.estado}</td>
                <td>
                  {cita.estado !== "Cancelada" && (
                    <button className="cancel-button" onClick={() => handleCancelar(cita.id)}>
                      Cancelar
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>No se encontraron citas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CitasPendientes;
