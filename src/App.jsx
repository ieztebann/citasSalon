
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import "./componentes/dashboard/Dashboard.scss";
import DashboardNavbar from "./componentes/dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "./componentes/dashboard/DashboardSidebar/DashboardSidebar";
import NuevaCita from "./pages/NuevaCita/NuevaCita";
import CitasPendientes from "./pages/CitasPendientes/CitasPendientes";

function DashboardLayout() {
  
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
}

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />

        
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
