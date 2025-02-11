export default function Cv() {
  return (
    <section id="cv" className="w-screen flex flex-col items-center h-auto">
      <h2 className="font-title text-2xl text-center ">Mon Curriculum Vitae</h2>
      <div className="flex items-center justify-center pt-52 pb-28">
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
