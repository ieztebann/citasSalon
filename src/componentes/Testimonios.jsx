import React from "react";
import Slider from "react-slick";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonios.css";

const testimonios = [
  {
    nombre: "Laura Méndez",
    texto:
      "El servicio fue excelente, me encantó el trato y la calidad. ¡Sin duda volveré pronto!",
    imagen: "img/testimonios/persona1.jpg",
    rating: 5,
  },
  {
    nombre: "María Gómez",
    texto:
      "Una experiencia maravillosa. Muy profesionales y amables. ¡Recomendado!",
    imagen: "img/testimonios/persona2.jpg",
    rating: 4,
  },
  {
    nombre: "Camila Torres",
    texto:
      "Muy buena atención, los resultados superaron mis expectativas.",
    imagen: "img/testimonios/persona3.jpg",
    rating: 5,
  },
  {
    nombre: "Daniela Ruiz",
    texto:
      "Ambiente muy agradable, todo impecable y el personal es encantador.",
    imagen: "img/testimonios/persona4.jpg",
    rating: 5,
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const Testimonios = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonios-section">
      <div className="testimonios-overlay">
        <h2 className="titulo-testimonios">Testimonios</h2>
        <Slider {...settings} className="slider-container">
          {testimonios.map((item, i) => (
            <div key={i} className="card-testimonio">
              <div className="imagen-wrapper">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="imagen-testimonio"
                />
              </div>
              <p className="texto-testimonio">{item.texto}</p>
              <div className="corazones">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaHeart
                    key={index}
                    className={`icono-corazon ${
                      index < item.rating ? "activo" : ""
                    }`}
                  />
                ))}
              </div>
              <h4 className="nombre-testimonio">{item.nombre}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonios;

