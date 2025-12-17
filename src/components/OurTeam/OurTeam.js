import "./OurTeam.css";
import { teamRow1, teamRow2, teamRow3 } from "../../Data/teamData.js";
import TeamSliderRow from "./TeamSliderRow";

const OurTeam = () => {
  const row1 = teamRow1 ?? [];
  const row2 = teamRow2 ?? [];
  const row3 = teamRow3 ?? [];

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
      <TeamSliderRow teamRow={row1} />
      <TeamSliderRow teamRow={row2} />
      <TeamSliderRow teamRow={row3} />
    </div>
  );
};

export default OurTeam;
