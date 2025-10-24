import "./Categories.css";

export default function Categories() {
  const categories = [
    { title: "Cuidado Facial", img: "img/categorias/Cuidado_Facial.jpg"},
    { title: "Pestañas", img: "img/categorias/Pestañas.jpg" },
    { title: "Cejas", img: "img/categorias/Cejas.jpg" },
    { title: "Cabello", img: "img/categorias/cabello.jpg" },
    { title: "Uñas", img: "img/categorias/uñas.jpg" },
    { title: "Maquilllaje", img: "img/categorias/maquillaje.jpg" },
  ];

  return (
    <section className="categories">
      <h2>Nuestros Servicios</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="category-card">
            <img src={cat.img} alt={cat.title} />
            <p>{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
