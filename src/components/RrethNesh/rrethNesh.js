import "./rrethNesh.css"

const rrethNesh = () => {
  // The Albanian text content is stored in variables for clarity
  const titleText = "Rreth nesh"
  const paragraphOne =
    "ROI Academy është institucion lider në ofrimin e trajnimeve profesionale në Kosovë, Shqipëri dhe Maqedoni të Veriut. Ne ofrojmë programe të avancuara dhe të strukturuara, duke përfshirë Programe 2-mujore dhe Programe 6-mujore, me trajnim dhe praktikë, të cilat ndihmojnë pjesëmarrësit të zhvillojnë aftësi të aplikueshme në tregun vendor dhe ndërkombëtar të punës. Me një përqasje moderne dhe të përshtatur sipas kërkesave të industrisë, programet tona kombinojnë mësimin teorik me përvojën praktike, duke garantuar përgatitje të plotë dhe të sigurt për të ardhmen profesionale të secilit pjesëmarrës."

  const paragraphTwo =
    "Përmes një metode unike të mësimdhënies, dhe një ekipi trajnerrësh me përvojë të gjerë në industrinë përkatëse, ROI Academy synon të jetë zgjedhja e parë për ato që dëshirojnë të investojnë në edukimin dhe zhvillimin e tyre profesional. Ne punojmë vazhdimisht për të sjellë teknikat inovative dhe për të ofruar një përvojë mësimore interaktive, duke u siguruar që studentët tanë të jenë gjithmonë të përgatitur për sfidat dhe mundësitë që ofron tregu i punës."

  return (
    <section className="about-section-container">
      <div className="about-content-wrapper">
        <h2 className="about-title">{titleText}</h2>
        <div className="about-text-container">
          <p className="about-paragraph">{paragraphOne}</p>
          <p className="about-paragraph">{paragraphTwo}</p>
        </div>
      </div>
    </section>
  )
}

export default rrethNesh
