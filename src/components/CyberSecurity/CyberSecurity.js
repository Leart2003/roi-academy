import "./CyberSecurity.css";
import Loginform from "../Loginform/Loginform";
import StatCard from "../StatCard/StatCard";
import SectionOfProgram from "../SectionOfProgram/SectionOfProgram";
import SecuredTraining from "../SecuredTraining/SecuredTraining";

const CyberSecurity = () => {
  const title = "Pse të zgjedhni programin 6-mujor për Siguri Kibernetike?";
  const paragraphs = [
    "Me rritjen e vazhdueshme të kërcënimeve kibernetike, kompanitë dhe institucionet kanë nevojë për ekspertë të specializuar për të mbrojtur të dhënat dhe sistemet potenciale.",
    "Ky trening është ideal për çdo person që dëshiron të fillojë një karrierë të re në fushën e sigurisë kibernetike apo të thellojë aftësitë e tij ekzistuese.",
    "Me programin tonë, do të jeni të aftë të identifikoni dhe të parandaloni sulmet, të menaxhoni sigurinë dhe të luftoni ndërmjet kërcënimeve të ndryshme.",
    "Përveç mësimit të thelluar, ofrohet praktikë në firmat partnere dhe një portofol të gjerë për të nxitur hyrjen në treg.",
  ];
  const imageSrc = "/path-to-your-image.jpg";
  const imageAlt = "Grup personash në një prej klasave të sigurisë kibernetike";

  return (
    <div className="cyber-security-page">
      <div className="cyber-security">
        <Loginform
          title="SIGURI KIBERNETIKE - 6 muaj trajnim & 6 muaj praktikë"
          button={<button className="apply-btn">Apliko Tani</button>}
        />
      </div>

      <StatCard />
      <SectionOfProgram />

      <section className="cyber-section">
        <div className="cyber-container">
          <div className="cyber-text">
            <h2 className="cyber-title">{title}</h2>
            {paragraphs.map((p, idx) => (
              <p key={idx} className="cyber-paragraph">
                {p}
              </p>
            ))}
          </div>
          <div className="cyber-imageWrap">
            <img
              src="/assets/images/Screenshot%202025-12-14%20232612.png"
              alt="this is a pic"
              className="cyber-image"
            />
          </div>
        </div>
      </section>
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
      <SecuredTraining/>
    </div>
  );
};

export default CyberSecurity;
