"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("header");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="navigation z-20 fixed"
      aria-label="Menu de navigation principal"
    >
      <div className="justify-center container-button-nav">
        <button onClick={toggleMenu} className="menu-toggle">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </button>
      </div>
      <ul className={`navigation-list ${isMenuOpen ? "open" : ""} `}>
        {[
          { id: "header", label: "Accueil" },
          { id: "about", label: "À propos" },
          { id: "competences", label: "TechSkills" },
          { id: "experiences", label: "Parcours" },
          { id: "projects", label: "Projets" },
          { id: "cv", label: "CV" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <li key={id} className="relative pt-3 pl-5">
            {" "}
            <a
              href={`#${id}`}
              className={`navigation-link relative transition duration-300 font-navigation ${
                activeSection === id ? "active" : "text-gray-400"
              }`}
            >
              {label}
              {activeSection === id && <span className="animate-ball"></span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
