export default function Cv() {
  return (
    <section id="cv" className="cv h-screen w-screen flex flex-col p-4">
      {/* Titre */}
      <h2 className="font-title text-2xl text-center">Mon Curriculum Vitae</h2>

      <a
        href="https://github.com/luciemtro/portefolio/raw/main/app/components/cvluciemonteiro.pdf"
        download="cvluciemonteiro.pdf"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Télécharger en PDF
      </a>
    </section>
  );
}
