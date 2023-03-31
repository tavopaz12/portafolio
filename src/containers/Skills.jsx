import { tecnologias } from "../hooks/icons.js";

import "../styles/Skills/Skills.scss";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="title">Skills</h2>

      <div className="flex">
        {tecnologias.map((tecnologia) => (
          <img
            key={tecnologia.name}
            src={tecnologia.src}
            alt={tecnologia.name}
          />
        ))}
      </div>
    </section>
  );
}
