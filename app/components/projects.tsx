import ProjectAnimation from "@/app/components/ProjectAnimation"; // Ajustez le chemin si nécessaire

export default function Projects() {
  return (
    <section id="projects" className="projects min-h-screen w-screen">
      <h2 className="font-title text-center py-10">Mes projets</h2>
      <ProjectAnimation />
    </section>
  );
}
