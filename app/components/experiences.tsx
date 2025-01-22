"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

export default function Experiences() {
  // Définir l'état pour le fond d'écran
  const [background, setBackground] = useState("/images/experience.webp");

  // Liste des expériences avec un attribut bg pour l'image de fond
  const experiences = [
    {
      id: "decoreno",
      title: "CAP Peintre en Bâtiment",
      entreprise: "Deco Reno",
      lieu: "Villeneuve d'Ascq, FR",
      description:
        "Formation pratique en peinture et revêtement des surfaces : préparation des supports, application de revêtements muraux et de sols, plafonnage, enduisage, ponçage, ainsi que la pose d'isolants. Un métier manuel et minutieux qui m’a permis de développer un sens aigu du détail.",
      image: "/images/avatars/decoreno.png",
      date: "Septembre 2012 à Juillet 2014",
      bg: "/images/france.webp", // Ajoutez ici l'image de fond pour ce slide
    },
    {
      id: "restauration",
      title: "Travail en Restauration",
      entreprise: "API Restauration",
      lieu: "Mouvaux, FR",
      description:
        "Travail polyvalent en cuisine et service, incluant la plonge, le service en salle et le nettoyage. Une expérience dans un environnement de restauration rapide où la réactivité et l’efficacité étaient essentielles.",
      image: "/images/avatars/restauration.png",
      date: "Mars 2018 à Août 2018",
      bg: "/images/france.webp", // Utilise la même image que Deco Reno
    },
    {
      id: "nomad",
      title: "Coloriste Coiffeuse",
      lieu: "Nomad Style Lausanne, CH",
      description:
        "Spécialiste en coloration, coupe, brushing et soins capillaires, offrant des conseils personnalisés à chaque cliente. Ce rôle a également impliqué la gestion des stocks, la prise de rendez-vous et l'accueil des clients dans un environnement dynamique et exigeant.",
      image: "/images/avatars/nomad.png",
      date: "Décembre 2018 à Août 2021",
      bg: "/images/suisse.webp", // Image de fond pour Nomad
    },
    {
      id: "hangar",
      title: "Vendeuse Polyvalente en Prêt-à-Porter",
      entreprise: "Hangar86",
      lieu: "Soumagne",
      description:
        "Vente, gestion des stocks, mise en rayon, réception des commandes et inventaire : un poste varié dans le secteur du prêt-à-porter qui m'a permis de développer mes compétences organisationnelles tout en offrant une expérience client optimale.",
      image: "/images/avatars/hangar.png",
      date: "Décembre 2021 à Juin 2022",
      bg: "/images/belgique.webp", // Image de fond pour Hangar
    },
    {
      id: "shein",
      title: "Contrôleuse Qualité",
      entreprise: "Shein",
      lieu: "Angleur",
      description:
        "Responsable du contrôle qualité des retours de vêtements, veillant à l'identification des défauts, à la réintégration des produits conformes en stock ou à leur élimination. Un rôle minutieux et essentiel dans le maintien des standards de qualité d'une grande entreprise de e-commerce.",
      image: "/images/avatars/shein.png",
      date: "Août 2022 à Octobre 2022",
      bg: "/images/belgique.webp", // Image de fond pour Shein
    },
    {
      id: "hackeuse",
      title: "Formation Hackeuse Club",
      entreprise: "BeCode",
      lieu: "Liège",
      description:
        "Une introduction captivante aux métiers de l'IT à travers un projet pratique en HTML, CSS et JavaScript. Cette expérience a été un véritable tremplin pour me lancer dans le monde du développement web en acquérant les bases essentielles à la création de sites interactifs.",
      image: "/images/avatars/web.png",
      date: "Octobre 2022 à Novembre 2022",
      bg: "/images/belgique.webp", // Image de fond pour Hackeuse
    },
    {
      id: "becode",
      title: "Formation Développeuse Web",
      entreprise: "BeCode",
      lieu: "Liège",
      description:
        "Un parcours intensif de formation en développement web couvrant une large palette de technologies : du Terminal et Git à HTML, CSS/SASS, JavaScript, PHP, SQL, ainsi que des frameworks comme React et Laravel. J'ai aussi exploré des outils avancés comme Docker et suivi la méthodologie Agile/SCRUM pour développer une approche professionnelle de la gestion de projets.",
      image: "/images/avatars/web.png",
      date: "Mai 2023 à Mars 2024",
      bg: "/images/belgique.webp", // Image de fond pour Becode
    },
    {
      id: "igsoft",
      title: "Stagiaire Développeuse Web",
      entreprise: "IG Soft",
      lieu: "Grivegnée",
      description:
        "Participation active au développement d'une application de facturation sur tablette, en utilisant Flutter et ASP.NET pour garantir une expérience utilisateur optimale et des performances fiables. Un stage stimulant qui m'a permis de perfectionner mes compétences en développement mobile et web.",
      image: "/images/avatars/web.png",
      date: "Décembre 2023 à Mars 2024",
      bg: "/images/belgique.webp", // Image de fond pour IG Soft
    },
    {
      id: "eafc",
      title: "BTS Développeuse Web",
      entreprise: "Ecole EAFC Charlemagne",
      lieu: "Fléron",
      description:
        "Formation approfondie aux fondamentaux du développement web : HTML, CSS, JavaScript, PHP, SQL, ainsi qu'aux frameworks modernes tels que Vue.js, WordPress et Laravel. Cette expérience enrichissante me permet d'acquérir une maîtrise des outils essentiels pour créer des applications web performantes.",
      image: "/images/avatars/web.png",
      date: "Septembre 2024 à 2026",
      bg: "/images/belgique.webp", // Image de fond pour EAF Charlemagne
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    // Mettre à jour l'état du fond d'écran selon le slide actif
    const currentSlide = experiences[swiper.activeIndex];
    setBackground(currentSlide.bg || "/images/belgique.webp");
  };

  return (
    <section
      id="experiences"
      className="experiences h-screen w-screen"
      style={{
        backgroundImage: `url(${background})`,
        transition: "background 0.5s ease-in-out",
      }}
    >
      <h2 className="font-title text-center text-white text-2xl font-bold">
        Mon Parcours
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
      >
        {experiences.map((exp) => (
          <SwiperSlide
            key={exp.id}
            className="flex flex-col items-center justify-center"
          >
            <article id={exp.id} className="">
              <header className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <h4 className="text-lg font-semibold mb-2">{exp.entreprise}</h4>
                <p className="text-sm font-semibold">{exp.lieu}</p>
                {exp.date && (
                  <p className="text-sm font-semibold">{exp.date}</p>
                )}
                <div className="container_avatars mb-4">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </header>
              <section>
                <p className="mt-4">{exp.description}</p>
              </section>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
