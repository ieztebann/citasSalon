import React, { useState } from "react";
import "../componentes/dashboard/Dashboard.scss";
import DashboardNavbar from "../componentes/dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../componentes/dashboard/DashboardSidebar/DashboardSidebar";
import NuevaCita from "../pages/NuevaCita/NuevaCita";
import CitasPendientes from "../pages/CitasPendientes/CitasPendientes";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("NuevaCita");

  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar setActiveSection={setActiveSection} />
        <div className="content">
          {activeSection === "NuevaCita" && <NuevaCita />}
          {activeSection === "CitasPendientes" && <CitasPendientes />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
