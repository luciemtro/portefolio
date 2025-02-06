import CardAnimation from "@/app/components/CardAnimation"; // Ajustez le chemin si nécessaire

export default function Competences() {
  return (
    <section
      id="competences"
      className="competences min-h-screen w-screen relative py-10"
    >
      <h2 className="font-title text-center">Mes TechSkills</h2>

      <CardAnimation />
    </section>
  );
}
