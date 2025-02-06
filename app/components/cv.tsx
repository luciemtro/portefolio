export default function Cv() {
  return (
    <section
      id="cv"
      className="cv h-screen w-screen flex flex-col p-4 items-center gap-32"
    >
      <h2 className="font-title text-2xl text-center p-10">
        Mon Curriculum Vitae
      </h2>
      <div className="flex items-center justify-center">
        <a
          href="https://github.com/luciemtro/portefolio/raw/main/app/components/cvluciemonteiro.pdf"
          download="cvluciemonteiro.pdf"
          className="button puce--violet uppercase font-basic scale "
        >
          Télécharger mon cv en PDF
        </a>
      </div>
    </section>
  );
}
