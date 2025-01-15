import Header from "./components/header";
import Navigation from "./components/navigation";
import About from "./components/about";
import Competences from "./components/competences";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import CV from "./components/cv";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="w-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Header />
        <Navigation />
        <About />
        <Competences />
        <Experiences />
        <Projects />
        <CV />
        <Contact />
      </main>
    </div>
  );
}
