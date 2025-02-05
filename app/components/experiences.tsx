"use client";
import { useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Experiences() {
  // Liste des expériences avec un attribut bg pour l'image de fond
  const experiences = [
    {
      id: "decoreno",
      title: "CAP Peintre en Bâtiment",
      entreprise: "Deco Reno",
      lieu: "Villeneuve d'Ascq, FR",
      description:
        "Formation pratique en peinture et revêtement des surfaces : préparation des supports, application de revêtements muraux et de sols, plafonnage, enduisage, ponçage, ainsi que la pose d'isolants. Un métier manuel et minutieux qui m’a permis de développer un sens aigu du détail.",
      date: "Septembre 2012 à Juillet 2014",
      bg: "/images/decoreno.webp",
      avatar: "/images/avatars/decoreno.webp",
    },
    {
      id: "restauration",
      title: "Travail en Restauration",
      entreprise: "API Restauration",
      lieu: "Mouvaux, FR",
      description:
        "Travail polyvalent en cuisine et service, incluant la plonge, le service en salle et le nettoyage. Une expérience dans un environnement de restauration rapide où la réactivité et l’efficacité étaient essentielles.",
      date: "Mars 2018 à Août 2018",
      bg: "/images/restauration.webp",
      avatar: "/images/avatars/restauration.webp",
    },
    {
      id: "nomad",
      title: "Coloriste Coiffeuse",
      entreprise: "Nomad Style",
      lieu: "Lausanne, CH",
      description:
        "Spécialiste en coloration, coupe, brushing et soins capillaires, offrant des conseils personnalisés à chaque cliente. Ce rôle a également impliqué la gestion des stocks, la prise de rendez-vous et l'accueil des clients dans un environnement dynamique et exigeant.",
      date: "Décembre 2018 à Août 2021",
      bg: "/images/nomad.webp",
      avatar: "/images/avatars/nomad.webp",
    },
    {
      id: "hangar",
      title: "Vendeuse Polyvalente en Prêt-à-Porter",
      entreprise: "Hangar86",
      lieu: "Soumagne",
      description:
        "Vente, gestion des stocks, mise en rayon, réception des commandes et inventaire : un poste varié dans le secteur du prêt-à-porter qui m'a permis de développer mes compétences organisationnelles tout en offrant une expérience client optimale.",
      date: "Décembre 2021 à Juin 2022",
      bg: "/images/hangar.webp",
      avatar: "/images/avatars/hangar.webp",
    },
    {
      id: "shein",
      title: "Contrôleuse Qualité",
      entreprise: "Shein",
      lieu: "Angleur",
      description:
        "Responsable du contrôle qualité des retours de vêtements, veillant à l'identification des défauts, à la réintégration des produits conformes en stock ou à leur élimination. Un rôle minutieux et essentiel dans le maintien des standards de qualité d'une grande entreprise de e-commerce.",
      date: "Août 2022 à Octobre 2022",
      bg: "/images/shein.webp",
      avatar: "/images/avatars/shein.webp",
    },
    {
      id: "hackeuse",
      title: "Formation Hackeuse Club",
      entreprise: "BeCode",
      lieu: "Liège",
      description:
        "Une introduction captivante aux métiers de l'IT à travers un projet pratique en HTML, CSS et JavaScript. Cette expérience a été un véritable tremplin pour me lancer dans le monde du développement web en acquérant les bases essentielles à la création de sites interactifs.",
      date: "Octobre 2022 à Novembre 2022",
      bg: "/images/ecole.webp",
      avatar: "/images/avatars/ecole.webp",
    },
    {
      id: "becode",
      title: "Formation Développeuse Web",
      entreprise: "BeCode",
      lieu: "Liège",
      description:
        "Un parcours intensif de formation en développement web couvrant une large palette de technologies : du Terminal et Git à HTML, CSS/SASS, JavaScript, PHP, SQL, ainsi que des frameworks comme React et Laravel. J'ai aussi exploré des outils avancés comme Docker et suivi la méthodologie Agile/SCRUM pour développer une approche professionnelle de la gestion de projets.",
      date: "Mai 2023 à Mars 2024",
      bg: "/images/ecole.webp",
      avatar: "/images/avatars/ecole.webp",
    },
    {
      id: "igsoft",
      title: "Stagiaire Développeuse Web",
      entreprise: "IG Soft",
      lieu: "Grivegnée",
      description:
        "Participation active au développement d'une application de facturation sur tablette, en utilisant Flutter et ASP.NET pour garantir une expérience utilisateur optimale et des performances fiables. Un stage stimulant qui m'a permis de perfectionner mes compétences en développement mobile et web.",
      date: "Décembre 2023 à Mars 2024",
      bg: "/images/igsoft.webp",
      avatar: "/images/avatars/ecole.webp",
    },
    {
      id: "eafc",
      title: "BTS Développeuse Web",
      entreprise: "Ecole EAFC Charlemagne",
      lieu: "Fléron",
      description:
        "Formation approfondie aux fondamentaux du développement web : HTML, CSS, JavaScript, PHP, SQL, ainsi qu'aux frameworks modernes tels que Vue.js, WordPress et Laravel. Cette expérience enrichissante me permet d'acquérir une maîtrise des outils essentiels pour créer des applications web performantes.",
      date: "Septembre 2024 à 2026",
      bg: "/images/ecole.webp",
      avatar: "/images/avatars/ecole.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Calculer l'index du dernier slide
  const lastIndex = experiences.length - 1;

  const handleSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section id="experiences" className="h-screen w-screen">
      <h2 className="font-title text-center text-2xl font-bold pb-20">
        Mon Parcours
      </h2>
      <SwiperComponent
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        initialSlide={lastIndex} // Commencer avec le dernier slide
        className="h-[80%] w-[90%] relative"
      >
        {experiences.map((exp, index) => (
          <SwiperSlide
            key={exp.id}
            className="flex items-center justify-center"
          >
            <article
              className="h-full w-full flex items-center justify-center text-white carousel-article"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.8) 90%), url(${exp.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background 0.5s ease-in-out",
                opacity: activeIndex === index ? 1 : 0.7,
              }}
            >
              <div className="container-text-article-experiences bg-text-carousel p-6">
                <img src={exp.avatar} alt="" className="w-28 h-28" />
                <h3 className="font-title title-carousel">{exp.title}</h3>
                <h4 className="font-basic">
                  {exp.entreprise}, {exp.lieu}
                </h4>
                {exp.date && <p className="font-basic">{exp.date}</p>}
                <p className="font-basic">{exp.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </SwiperComponent>
    </section>
  );
}
