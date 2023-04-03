import image from "../assets/images/banner.webp";

import "../styles/About/About.scss";

export default function About() {
  return (
    <section className="about">
      <h2 className="title">Sobre mi...</h2>

      <div className="about__card">
        <div className="image">
          <img src={image} alt="about" loading="lazy" />
        </div>
        <div className="biografia">
          <p>
            ¡Hola! Mi nombre es José Octavio Paz y soy desarrollador frontend
            con más de 3 años de experiencia. Me especializo en React.js,
            LitElement, JavaScript, HTML5 y CSS3, lo que me permite crear
            soluciones de software innovadoras y de alta calidad. También tengo
            una sólida comprensión de los principios de diseño de UI/UX, CSS
            avanzado (Módulos CSS, SCSS) y diseño receptivo.
          </p>
          <p>
            Pero ser desarrollador es algo más que escribir código. Se trata de
            crear soluciones que resuelvan problemas reales y tengan un impacto
            positivo en la vida de las personas. Es por eso que me apasiona lo
            que hago y siempre me esfuerzo por estar al día con las últimas
            tendencias tecnológicas y mejorar mis habilidades y conocimientos en
            el campo.
          </p>
          <p>
            Estoy comprometido a escribir código de calidad y crear experiencias
            de usuario excepcionales. Con una actitud positiva y un enfoque en
            agregar valor, siempre estoy listo para asumir nuevos desafíos y
            trabajar con equipos de desarrollo para brindar resultados
            sobresalientes. Si está buscando un desarrollador apasionado y
            dedicado para llevar su proyecto al siguiente nivel, no dude en
            ponerse en contacto.
          </p>
        </div>
      </div>
    </section>
  );
}
