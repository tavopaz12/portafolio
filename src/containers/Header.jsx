import { useState } from "react";
import "../styles/Header/Header.scss";
import { handleLinkClick } from "../hooks/activesLinks";

const navLinks = [
  { name: "home", label: "Inicio" },
  { name: "about", label: "Sobre mi..." },
  { name: "skills", label: "Skills" },
  { name: "projects", label: "Proyectos" },
  { name: "contact", label: "Contacto" },
  { name: "blog", label: "Blog" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      <header className="header">
        <div className="logo">
          <a onClick={() => handleLinkClick("home", setActiveLink)}>
            <h1>Tavopaz</h1>
          </a>
        </div>

        <nav className="header__nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  onClick={() => handleLinkClick(link.name, setActiveLink)}
                  className={activeLink === link.name ? "active" : null}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
