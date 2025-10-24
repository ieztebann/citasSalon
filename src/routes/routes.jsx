// src/routes/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../componentes/Login";
import Registro from "../componentes/Registro";
import Dashboard from "../componentes/dashboard";

export const router = createBrowserRouter([
  {
    path: "/Serenity-SPA/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/Serenity-SPA/login", element: <Login /> },
      { path: "/Serenity-SPA/registro", element: <Registro /> },
      { path: "/Serenity-SPA/dashboard", element: <Dashboard /> }
   
    ],
  },
]);
