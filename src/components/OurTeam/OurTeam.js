import "./OurTeam.css";
import { teamRows } from "../../Data/teamData.js";
import TeamSliderRow from "./TeamSliderRow";

const OurTeam = () => {
  const renderTeamRows = () => {
    return (
      <div className="team-container">
        {teamRows.map((row, index) => (
          <TeamSliderRow key={index} people={row} />
        ))}
      </div>
    );
  };
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
      {renderTeamRows()}
    </div>
  );
};

export default OurTeam;
