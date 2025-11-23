import "./OurTeam.css";
import { teamRow1, teamRow2, teamRow3 } from "../../Data/teamData.js";
import TeamSliderRow from "./TeamSliderRow";

const OurTeam = () => {
  // teamRow1,2,3 are defined in your data as [[...items]], so use [0]
  const row1 = teamRow1 && teamRow1[0] ? teamRow1[0] : [];
  const row2 = teamRow2 && teamRow2[0] ? teamRow2[0] : [];
  const row3 = teamRow3 && teamRow3[0] ? teamRow3[0] : [];

  return (
    <div className="ot-container">
      <div className="ot-head-container">
        <h2>Ekipi ynë</h2>
        <p>
          Përmes një metode unike të mësimdhënies dhe një ekipi trajnerësh me
          përvojë të gjerë në industrinë përkatëse,
          <br /> ROI Academy synon të jetë zgjedhja e parë për ata që dëshirojnë
          të investojnë në edukimin dhe zhvillimin e tyre profesional.
        </p>
      </div>

      {/* Pass each row array separately */}
      <TeamSliderRow teamRow={row1} />
      <TeamSliderRow teamRow={row2} />
      <TeamSliderRow teamRow={row3} />
    </div>
  );
};

export default OurTeam;
