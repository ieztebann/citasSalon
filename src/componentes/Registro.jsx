import React, { useState } from "react";
import "../componentes/Registro.css";
import { useNavigate } from "react-router-dom";

export default function Registro() {
  const urlApi = "https://6740fd35d0b59228b7f1f288.mockapi.io/api/v1";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
      avatar: "https://avatar.iran.liara.run/public",
    };

    try {
      await fetch(`${urlApi}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      navigate("/Serenity-SPA/login");
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  const goLogin = () => {
    navigate("/Serenity-SPA/login");
  };

  return (
    <main>
      <div className="registro-container">
        {/* Imagen lateral */}
        <div className="image-section">
          <img
            src="img/hero/registro2.jpg"
            alt="Registro visual"
          />
        </div>

        {/* Formulario */}
        <div className="form-registro-container">
          <form onSubmit={onSubmit}>
            <h1>Regístrate</h1>
            <p>Crea tu cuenta para comenzar la aventura</p>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre de usuario"
                required
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                onChange={onChange}
              />
            </div>

            <button className="button-form" type="submit">
              Registrarse
            </button>

            <div className="login-redirect">
              <p>¿Ya tienes cuenta?</p>
              <h3 onClick={goLogin}>Inicia sesión</h3>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
