export default function Header() {
  return (
    <section
      id="header"
      className="header h-screen w-screen"
      aria-label="Section d'accueil"
    >
      <article className="cards h-screen w-screen">
        <header className="card animated eeve h-screen w-screen">
          {/* Conteneur texte */}
          <div className="container-text-header absolute">
            <h1 className="header-title font-title">
              Bienvenue, je suis Lucie
            </h1>
            <h2 className="header-subtitle font-basic text-2xl uppercase">
              Développeuse Web
            </h2>
            <p className="font-basic text-lg pt-2 pb-4 header-p">
              Découvrez mon univers à travers mes projets !
            </p>
          </div>
        </header>
      </article>
    </section>
  );
}
