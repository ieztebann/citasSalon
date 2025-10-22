import React from "react";
import Slider from "react-slick";
import "./ServiciosCarrusel.css";

const ServiciosCarrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // ✅ Rutas correctas: desde la carpeta "public"


  return (
    <section className="carrusel">
      <h2>Nuestros Servicios</h2>
      <Slider {...settings}>
        {servicios.map((s, i) => (
          <div key={i} className="slide">
            <img src={s.img} alt={s.titulo} />
            <div className="overlay">
              <h3>{s.titulo}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ServiciosCarrusel;
