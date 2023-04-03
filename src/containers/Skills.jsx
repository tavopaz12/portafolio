import { tecnologias } from "../config/icons.js";

import "../styles/Skills/Skills.scss";

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="title">Skills</h2>

      <div className="flex">
        {tecnologias.map((tecnologia) => (
          <div className="container__card" key={tecnologia.name}>
            <img
              loading="lazy"
              key={tecnologia.name}
              src={tecnologia.src}
              alt={tecnologia.name}
              className="img"
            />
            <p className="name">{tecnologia.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
