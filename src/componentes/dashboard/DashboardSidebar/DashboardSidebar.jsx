import { MdCalendarToday, MdListAlt } from "react-icons/md";
import "./DashboardSidebar.scss";

const DashboardSidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => setActiveSection("NuevaCita")}>
        <MdCalendarToday className="icon" />
        <span>Agendar nueva cita</span>
      </div>

      <div className="sidebar-item" onClick={() => setActiveSection("CitasPendientes")}>
        <MdListAlt className="icon" />
        <span>Mis citas</span>
      </div>
    </div>
  );
};

export default DashboardSidebar;
