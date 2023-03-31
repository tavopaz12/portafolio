import About from "../containers/About";
import Contacto from "../containers/Contacto";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import Index from "../containers/Index";
import Proyects from "../containers/Proyects";
import Skills from "../containers/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Index />
      <About />
      <Skills />
      <Proyects />
      <Contacto />
      <Footer/>
    </>
  );
}
