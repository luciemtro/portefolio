"use client";
import { useEffect, useState, useMemo } from "react";

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

  // Tableau des images
  const images = [
    "/images/header.webp",
    "/images/header2.webp",
    "/images/header.webp",
    "/images/header3.webp",
  ];

  // Utilisation du hook pour précharger les images
  usePreloadImages(images);

  // Durée d'affichage en millisecondes pour chaque image
  const displayDurations = useMemo(() => [3000, 500, 4000, 500], []); // Durées ajustées : premier header 8000ms, header 2 et 3 2000ms

  // Animation de glitch sur le header
  useEffect(() => {
    const glitchEffect = () => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
        // Changer l'image après l'effet de glitch
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 300); // Durée de l'effet de glitch
    };

    // Gestion du timing pour changer d'image
    const timeout = setTimeout(() => {
      glitchEffect();
    }, displayDurations[imageIndex]); // Utilisation de la durée d'affichage

    return () => {
      clearTimeout(timeout); // Nettoyage à l'unmount
    };
  }, [imageIndex, images.length, displayDurations]);

  // Sélection de la classe CSS appropriée
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
            <h1 className="header-title font-title">Bienvenue !</h1>
            <h2 className="header-subtitle font-basic-tall text-3xl">
              Je m&apos;appelle Lucie, Développeuse Web
            </h2>
            <p className="font-basic text-2xl pt-2 pb-4 header-p">
              Découvrez mon univers à travers mes projets !
            </p>
          </div>
        </header>
      </article>
    </section>
  );
}
