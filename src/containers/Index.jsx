import banner from "../assets/images/tavopaz12_dev.png";
import facebook from "../assets/icons/facebook-50.png";
import linkedin from "../assets/icons/linkedin-50.png";
import whatsapp from "../assets/icons/whatsapp-50.png";
import github from "../assets/icons/github-50.png";
import instagram from "../assets/icons/instagram-50.png";

import "../styles/Home/index.scss";

const logos = [
  {
    name: "instagram",
    src: instagram,
    link: "https://www.instagram.com/tavopaz_12/",
  },
  { name: "github", src: github, link: "https://github.com/tavopaz12" },
  { name: "whatsapp", src: whatsapp, link: "https://wa.me/+522781205512" },
  {
    name: "linkedin",
    src: linkedin,
    link: "https://www.linkedin.com/in/tavopaz12/",
  },
  {
    name: "facebook",
    src: facebook,
    link: "https://www.facebook.com/tavoopj.paz3/",
  },
];

export default function Index() {
  return (
    <section id="home">
      <div className="description">
        <h2 className="saludo">
          <span className="borde">Hi, World!🌍,</span>{" "}
        </h2>
        <p className="my__name">
          I'm Jose <span className="text__blue">octavio</span>
        </p>
        <p className="profession">I'm developer web</p>

        <div className="link__redes">
          {logos.map((logo) => (
            <a key={logo.name} href={logo.link} target="_blank" className="logo__container">
              <img src={logo.src} alt={logo.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="image__profile">
        <img src={banner} alt="tavopaz12_dev" className="banner__profile" />
      </div>
    </section>
  );
}
