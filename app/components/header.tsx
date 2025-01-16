export default function Header() {
  return (
    <section
      id="header"
      className="header h-screen w-screen"
      aria-label="Section d'accueil"
    >
      <div className="linear-gradient"></div>
      <article className="cards h-screen w-screen">
        <header className="card animated eeve h-screen w-screen">
          <h1 className="header-title">Bienvenue, je suis Lucie</h1>
          <h2 className="header-subtitle">Développeuse Web</h2>
          <p>Découvrez mon univers à travers mes projets !</p>
        </header>
      </article>
    </section>
  );
}
