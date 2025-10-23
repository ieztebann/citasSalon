import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import Categories from "../componentes/Categories";
import InfoBar from "../componentes/InfoBar";
import PromoBanner from "../componentes/PromoBanner";
import Testimonios from "../componentes/Testimonios";
import Footer from "../componentes/Footer";

/* import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials"; 
import Footer from "../components/Footer";*/

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Categories />
      <PromoBanner />
      <InfoBar />
      <Testimonios />
      <Footer />
    </div>
  );
}
