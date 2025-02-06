import CardAnimation from "@/app/components/CardAnimation"; // Ajustez le chemin si nécessaire

export default function Competences() {
  return (
    <section
      id="competences"
      className="competences min-h-screen w-screen relative "
    >
      <h2 className="font-title text-center py-12 px-5">Mes TechSkills</h2>

      <CardAnimation />
    </section>
  );
}
