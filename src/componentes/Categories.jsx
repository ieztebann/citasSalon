import "./Categories.css";

export default function Categories() {
  const categories = [
    { title: "Cuidado Facial", img: "img/categorias/Cuidado_Facial.jpg"},
    { title: "Pestañas", img: "img/categorias/Pestañas.jpg" },
    { title: "Cejas", img: "img/categorias/Cejas.jpg" },
    { title: "Rostro", img: "img/categorias/Cejas.jpg" },
    { title: "Uñas", img: "img/categorias/Cejas.jpg" },
    { title: "Maquilllaje", img: "img/categorias/Cejas.jpg" },
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
