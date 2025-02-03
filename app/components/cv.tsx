export default function Cv() {
  return (
    <section
      id="cv"
      className="cv h-screen w-screen flex flex-col p-4 items-center"
    >
      <h2 className="font-title text-2xl text-center mb-10">
        Mon Curriculum Vitae
      </h2>
      <div className="cloud-download flex items-center justify-center">
        <a
          href="https://github.com/luciemtro/portefolio/raw/main/app/components/cvluciemonteiro.pdf"
          download="cvluciemonteiro.pdf"
          className=" p-20 text-black text-center mb-5 uppercase font-basic"
        >
          Télécharger mon cv en PDF
        </a>
      </div>
    </section>
  );
}
