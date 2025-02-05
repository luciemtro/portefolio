"use client";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const paragraphs = [
    "Bonjour et bienvenue sur mon portfolio ! 👩‍💻 Actuellement en formation en développement web, je suis passionnée par la création et l’innovation numérique.",
    "Mon domaine de prédilection est l’intégration web : transformer des maquettes en expériences interactives captivantes est un véritable plaisir. Aujourd’hui, je me prépare à intégrer le marché de l’emploi avec l’enthousiasme de mettre mes compétences en pratique et de relever des défis concrets.",
    "Polyvalente et curieuse, j’aime explorer les technologies, du front-end au back-end. Mon objectif est de collaborer avec une équipe dynamique, partager des idées innovantes et concevoir des solutions qui ont un impact.",
    "Si vous recherchez une développeuse motivée, enthousiaste et prête à coder avec passion, je serais ravie d’échanger avec vous ! 😊",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Observe pour détecter si la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Déclenche l'animation quand 50% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Lance l'animation seulement si elle a été déclenchée
  useEffect(() => {
    if (hasStarted && paragraphIndex < paragraphs.length) {
      if (charIndex < paragraphs[paragraphIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + paragraphs[paragraphIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, 30); // Vitesse de frappe

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayedText((prev) => prev + "\n\n");
          setParagraphIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 500); // Pause entre paragraphes
      }
    }
  }, [charIndex, paragraphIndex, paragraphs, hasStarted]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="p-8 w-screen"
      aria-labelledby="about-title"
    >
      <h1 id="about-title" className="font-title p-12 text-center">
        À propos de moi
      </h1>
      <div className="relative text-neonGreen p-8 shadow-lg w-[90%] mx-auto border border-neonGreen/50">
        <div className="absolute inset-0 neon-border animate-glitch"></div>

        <article className="text-lg font-mono text-gray-300 leading-relaxed">
          <p className="typing-effect">{displayedText}</p>
        </article>
      </div>
    </section>
  );
}
