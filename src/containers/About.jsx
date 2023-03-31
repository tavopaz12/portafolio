import image from "../assets/images/banner.png";

import "../styles/About/About.scss";

export default function About() {
  return (
    <section className="about">
      <h2 className="title">Sobre mi...</h2>

      <div className="about__card">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="biografia">
          <p>
            Desarrollador Front-End viviendo en México. Sumergido en el mundo de
            la programación desde 2021. Disfruto resolver problemas desde lo mas
            simple hasta lo mas complejo, combinando la lógica y el diseño
            creativo en aplicaciones atractivas, accesibles y fáciles de usar.
            Soy una persona de rápido aprendizaje y buena trabajando en equipo.
            Disfruto pasar mi tiempo aprendiendo y mejorando mis habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}
