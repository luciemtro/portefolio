"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchEffect = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 500); // 0.5s de transition

      // Changer le prochain glitch à un intervalle aléatoire entre 5 et 10 secondes
      const nextGlitch = Math.random() * (15000 - 10000) + 5000; // 5 à 10 secondes
      setTimeout(glitchEffect, nextGlitch);
    };

    const timeout = setTimeout(glitchEffect, 5000); // Premier glitch après 5s

    return () => clearTimeout(timeout); // Nettoyage à l'unmount
  }, []);

  return (
    <section
      id="header"
      className="h-screen w-screen"
      aria-label="Section d'accueil"
    >
      <article className="min-h-screen w-screen">
        <header
          className={`card-header relative h-screen w-screen transition-all duration-500 ${
            isGlitching ? "card-header2" : "card-header"
          }`}
        >
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
