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
  const [activeLink, setActiveLink] = useState("home");

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Tavopaz</h1>
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
