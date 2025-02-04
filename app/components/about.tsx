export default function About() {
  return (
    <section id="about" className="about w-screen">
      <h2 className="font-title text-center pb-14">A propos</h2>
      <article className="flex flex-col items-center justify-center gap-10 mx-20">
        <header>
          <h3 className="mb-5 font-basic">
            Bonjour et bienvenue sur mon portfolio ! 👩‍💻
          </h3>
          <p className="font-basic">
            {" "}
            Actuellement en formation en développement web, je suis passionnée
            par tout ce qui touche à la création et à l’innovation numérique.
            Mon truc, c’est l’intégration web : transformer des maquettes en
            expériences visuelles captivantes et fonctionnelles, c’est un vrai
            plaisir !
          </p>
        </header>
        <section>
          <p className="font-basic">
            {" "}
            Je suis à un moment excitant de mon parcours, prête à quitter le
            cadre académique pour plonger dans le grand bain du marché de
            l’emploi. J’ai hâte de mettre mes compétences en pratique, de
            relever des défis concrets et d’apprendre encore et toujours auprès
            de personnes inspirantes.
          </p>
          <p className="font-basic">
            {" "}
            Polyvalente, curieuse et toujours partante pour découvrir de
            nouvelles technologies, je suis ouverte à tous types de projets, que
            ce soit en front-end, back-end ou même les deux. Ce qui m’importe
            avant tout, c’est de collaborer avec une équipe dynamique, partager
            des idées et créer des solutions qui font la différence.
          </p>
        </section>
        <footer>
          <p className="font-basic">
            {" "}
            Si tu cherches quelqu’un de motivé, enthousiaste et prêt à coder
            avec passion, tu es au bon endroit ! 😊
          </p>
        </footer>
      </article>
    </section>
  );
}
