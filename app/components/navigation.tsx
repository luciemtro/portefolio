export default function Navigation() {
  return (
    <nav
      className="navigation z-20 fixed"
      aria-label="Menu de navigation principal"
    >
      {/* Span lumineux qui tourne autour */}
      <span className="nav-glow"></span>
      <ul className="navigation-list px-5 py-2 flex gap-6 font-basic">
        <li>
          <a href="#header" className="navigation-link">
            Accueil
          </a>
        </li>
        <li>
          <a href="#about" className="navigation-link">
            À propos
          </a>
        </li>
        <li>
          <a href="#competences" className="navigation-link">
            TechSkills
          </a>
        </li>
        <li>
          <a href="#experiences" className="navigation-link">
            Parcours
          </a>
        </li>
        <li>
          <a href="#projects" className="navigation-link">
            Projets
          </a>
        </li>
        <li>
          <a href="#cv" className="navigation-link">
            CV
          </a>
        </li>
        <li>
          <a href="#contact" className="navigation-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
