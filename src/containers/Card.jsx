import "../styles/Proyects/Card.scss";
import logoGithub from "../assets/icons/github-50.png";
import logoInternet from "../assets/icons/internet.jpg";

export default function Card({title, desc, image, githubLink, webLink}) {
  return (
    <div className="card__proyect">
      <img src={image} alt="imagen" className="card__image" />
      <div className="info">
        <p className="title__proyect">{title}</p>
        <span className="desc">{desc}</span>

        <div className="links">
          <a href={githubLink} target="_blank">
            <img src={logoGithub} alt="github" />
          </a>

          <a href={webLink} target="_blank">
            <img src={logoInternet} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}
