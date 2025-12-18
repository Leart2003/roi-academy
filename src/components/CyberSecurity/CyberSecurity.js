import "./CyberSecurity.css";
import SectionOfProgram from "../SectionOfProgram/SectionOfProgram";
import SecuredTraining from "../SecuredTraining/SecuredTraining";
import StudentFeedback from "../StudentFeedback/StudentFeedback";
import OurTeam from "../OurTeam/OurTeam";
import { useNavigate } from "react-router";
import ApplyOfferForm from "../DigitalMarketing/ApplyOfferForm";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import MonthlyProgram from "../MonthlyProgram/MonthlyProgram";
import ImageSlider from "../ImageSlider/ImageSlider";
import TrainingCard from "../Tprogramming/TrainingCard";

const CyberSecurity = () => {
  const title = "Pse të zgjedhni programin 6-mujor për Siguri Kibernetike?";
  const paragraphs = [
    "Me rritjen e vazhdueshme të kërcënimeve kibernetike, kompanitë dhe institucionet kanë nevojë për ekspertë të specializuar për të mbrojtur të dhënat dhe sistemet potenciale.",
    "Ky trening është ideal për çdo person që dëshiron të fillojë një karrierë të re në fushën e sigurisë kibernetike apo të thellojë aftësitë e tij ekzistuese.",
    "Me programin tonë, do të jeni të aftë të identifikoni dhe të parandaloni sulmet, të menaxhoni sigurinë dhe të luftoni ndërmjet kërcënimeve të ndryshme.",
    "Përveç mësimit të thelluar, ofrohet praktikë në firmat partnere dhe një portofol të gjerë për të nxitur hyrjen në treg.",
  ];

  const navigate = useNavigate();
  const handleApplyClick = () => {
    navigate("/application");
  };

  const cyberItems = [
    {
      title: "Hyrje në Siguri Kibernetike",
      text: "Njohuri bazë për kërcënimet dhe mbrojtjen e sistemeve.",
    },
    {
      title: "Hakimi Etik (Penetration Testing)",
      text: "Testimi dhe auditimi i sistemeve për qëndrueshmëri dhe identifikimin e dobësive..",
    },
    {
      title: "Siguria e Sistemeve Operative",
      text: "Mbrojtja e platformave Windows dhe Linux.",
    },
    {
      title: "Politikat, Implikimet dhe Aspektet Ligjore",
      text: "Regulloret dhe standardet e sigurisë kibernetike në nivel ndërkombëtar.",
    },
    {
      title: "Siguria e Rrjetave",
      text: "Identifikimi dhe parandalimi i sulmeve kibernetike në rrjete.",
    },
    {
      title: "Siguria e Aplikacioneve Web",
      text: "Metodat për mbrojtjen e faqeve dhe aplikacioneve online.",
    },

    {
      title: "Menaxhimi dhe Përgjigja ndaj Incidenteve Kibernetike",
      text: "Strategjitë për mbrojtje dhe rikuperim nga sulmet.",
    },

    {
      title: "Cloud Security dhe IoT Security",
      text: "Mbrojtja e sistemeve të bazuara në cloud dhe pajisjeve të lidhura në internet.",
    },
  ];
  return (
    <div className="cyber-security-page">
      <section className="program-sectioni">
        <div className="program-containeri">
          <div className="program-lefti">
            <h1 className="tittlei">SIGURI KIBERNETIKE</h1>
            <h2 className="subttitlei">6 muaj trajnim & 6 muaj praktikë</h2>

            <p className="dessci">
              Siguria kibernetike është një nga profesionet më të rëndësishme
              dhe të kërkuara në epokën digjitale.
            </p>

            <button className="apply-btnn" onClick={handleApplyClick}>
              Apply Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <ApplicationForm isDark={true} hideInterestedInput={true} />
        </div>
      </section>
      <TrainingCard items={cyberItems} />

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
      <SecuredTraining />
      <StudentFeedback />
      <OurTeam />

      <div className="hero-suksesi">
        {" "}
        <div className="container">
          {" "}
          <h2 className="hero-title">Suksesi i pjesëmarrësve</h2>{" "}
          <p className="hero-desc">
            {" "}
            Derri më të tanjë, ky trajnim ka pasur rreth 150 pjesëmarrës, nga të
            cilët mbi 90% janë të punësuar ose të vjetërpuan në industri të
            ndryshme të sigurisë dhe teknologjisë informative. Ky program ka
            ndihmuar shumë profesionistë të ndërtojnë një karriere të sigurt dhe
            të qëndrueshme në këtë fushë në rritje.{" "}
          </p>{" "}
          <p className="hero-desc">
            {" "}
            Disa nga pjesëmarrësit janë këtu – një konkluzion që thekson punën
            në kompani të njohura, ndersa të tjerët kanë zgjedhur të punojnë si
            ekspertë të paraqur, duke ofruar shërbime të avancuara te testimit
            dhe auditimit të sigurisë për klientët e ndryshëm.{" "}
          </p>{" "}
        </div>{" "}
      </div>
      <ApplyOfferForm />
      <MonthlyProgram />
      <ImageSlider />
    </div>
  );
};

export default CyberSecurity;
