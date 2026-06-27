import "./App.css";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/HeroSection";
import { Menu } from "./sections/MenuSection";
import { Order } from "./sections/OrderSection";
import { Gallery } from "./sections/GallerySection";
import { Review } from "./sections/ReviewSection";
import { About } from "./sections/AboutSection";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <section id="hero"></section>
      <Navbar />
      <Hero />
      <section id="menu">
        <Menu />
      </section>
      <Order />
      <section id="gallery">
        <Gallery />
      </section>

      <Review />

      <section id="tentang">
        <About />
      </section>

      <Footer />
    </>
  );
}

export default App;
