import Loginform from "../Loginform/Loginform";
import "./FutureGeneration.css";
import StatCard from "../StatCard/StatCard";
import SectionOfProgram from "../SectionOfProgram/SectionOfProgram";
import OurTeam from "../OurTeam/OurTeam";
import Footer from "../Footer/Footer";

const FutureGeneration = () => {
  return (
    <div className="future-generation">
      <Loginform
        title="Future Generation Akademia 3-Vjeçare e ROI Academy"
        button={<button className="apply-btn">Apliko Tani</button>}
      />
      <StatCard />
      <SectionOfProgram />
      <div className="program-future">
        <div className="program-text">
          <h1>Pse të zgjedhni programin Future Generations?</h1>
          <p>
            Për të rinjtë ambiciozë që duan të ndërtojnë një karrierë të
            qëndrueshme dhe të suksesshme, duke u pajisur me aftësi praktike dhe
            njohuri të thelluara. Future Generations është një program edukimi
            3-vjeçar i ndërtuar për të rinjtë e moshës 14 deri në 19 vjeç, që
            kanë ambicie të zhvillojnë aftësi konkrete në teknologji dhe të
            ndërtojnë karrierën e tyre përmes praktikës dhe eksperiencës reale.
            Ky program është unik në strukturën e tij, duke kombinuar trajnim
            profesional, praktikë 3-vjeçare dhe ndërtim të një portfolio
            personale. Akademia është ndarë në 3 vite, ku secili vit
            përqendrohet në zhvillimin e aftësive specifike, të kërkuara në
            tregun e punës. Çdo modul përfundon me projekt praktik, certifikatë
            dhe referencë, ndërsa gjatë gjithë programit studentët përfshihen në
            praktika të mbështetura, fizike ose online.
          </p>
        </div>

        <div className="program-image">
          <img src="/assets/images/future.png" alt="future" />
        </div>
      </div>

      <div className="benefits">
        <h2>Çfarë përfitojnë studentët?</h2>

        <div className="benefits-lists">
          <ul>
            <li>
              <span>Certifikatë dhe referencë për çdo modul</span>
            </li>
            <li>
              <span>Praktikë reale gjatë gjithë programit</span>
            </li>
            <li>
              <span>9 profile profesionale të zhvilluara</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>Portfolio e personalizuar me projekte konkrete</span>
            </li>
            <li>
              <span>
                Aftësi për të ndërtuar një biznes të tyre ose për të punuar në
                industri
              </span>
            </li>
          </ul>
        </div>
      </div>
      <OurTeam />

    </div>
  );
};

export default FutureGeneration;
