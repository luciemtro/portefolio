"use client";
import { useEffect, useState, useRef } from "react";

// Hook pour précharger les images
const usePreloadImages = (imageList: string[]) => {
  useEffect(() => {
    const preloadImages = async () => {
      const promises = imageList.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
        });
      });
      await Promise.all(promises);
    };

    preloadImages();
  }, [imageList]);
};

export default function Header() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [typedTextH1, setTypedTextH1] = useState("");
  const [typedTextH2, setTypedTextH2] = useState("");
  const [typedTextP, setTypedTextP] = useState("");
  const typingIndexRef = useRef(0);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasStartedRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Textes à afficher
  const fullTextH1 = "Bienvenue !";
  const fullTextH2 = "Je m'appelle Lucie, Développeuse Web";
  const fullTextP = "Découvrez mon univers à travers mes projets !";
  const typingSpeed = 30; // Temps entre chaque lettre (ms)

  // Tableau des images
  const images = [
    "/images/header.webp",
    "/images/header2.webp",
    "/images/header.webp",
    "/images/header3.webp",
  ];

  // Utilisation du hook pour précharger les images
  usePreloadImages(images);

  // Durées d'affichage des images
  const displayDurations = [3000, 500, 4000, 500]; // Durée en millisecondes pour chaque image

  // Observer pour détecter si le header est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          startTypingEffect(); // Commencer l'effet de typage
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Effet de Typing pour chaque élément
  const startTypingEffect = () => {
    typingIndexRef.current = 0;

    // Typage pour le h1
    const typeH1 = () => {
      if (typingIndexRef.current < fullTextH1.length) {
        setTypedTextH1(fullTextH1.slice(0, typingIndexRef.current + 1));
        typingIndexRef.current += 1;
        typingTimeoutRef.current = setTimeout(typeH1, typingSpeed);
      } else {
        typingIndexRef.current = 0;
        typeH2();
      }
    };

    // Typage pour le h2
    const typeH2 = () => {
      if (typingIndexRef.current < fullTextH2.length) {
        setTypedTextH2(fullTextH2.slice(0, typingIndexRef.current + 1));
        typingIndexRef.current += 1;
        typingTimeoutRef.current = setTimeout(typeH2, typingSpeed);
      } else {
        typingIndexRef.current = 0;
        typeP();
      }
    };

    // Typage pour le paragraphe
    const typeP = () => {
      if (typingIndexRef.current < fullTextP.length) {
        setTypedTextP(fullTextP.slice(0, typingIndexRef.current + 1));
        typingIndexRef.current += 1;
        typingTimeoutRef.current = setTimeout(typeP, typingSpeed);
      }
    };

    typeH1(); // Démarrarage l'effet de typage pour le h1
  };

  // Nettoyage en cas de démontage du composant
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  // Gestion de l'effet glitch et changement d'image
  useEffect(() => {
    const glitchEffect = () => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 300); // Durée de l'effet de glitch
    };

    const timeout = setTimeout(glitchEffect, displayDurations[imageIndex]); // Changer d'image avec la durée appropriée

    return () => clearTimeout(timeout);
  }, [imageIndex, images.length, displayDurations]);

  // Définition de la classe CSS en fonction de l'image actuelle
  const currentClassName =
    imageIndex === 0
      ? "card-header"
      : imageIndex === 1
      ? "card-header2"
      : imageIndex === 2
      ? "card-header"
      : imageIndex === 3
      ? "card-header3"
      : "";

  return (
    <section
      id="header"
      ref={sectionRef}
      className="h-screen w-screen"
      aria-label="Section d'accueil"
    >
      <article className="min-h-screen w-screen">
        <header
          className={`relative h-screen w-screen transition-all ${currentClassName} ${
            isGlitching ? "active" : ""
          }`}
        >
          <div className="container-text-header absolute">
            <h1 className="header-title font-title">{typedTextH1}</h1>
            <h2 className="header-subtitle font-basic-tall text-3xl typing-effect">
              {typedTextH2}
            </h2>
            <p className="font-basic text-2xl pt-2 pb-4 header-p">
              {typedTextP}
            </p>
          </div>
        </header>
      </article>
    </section>
  );
}
