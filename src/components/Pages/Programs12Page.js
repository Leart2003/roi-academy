import "./Programs12Page.css";
import OurTeam from "../OurTeam/OurTeam";
import { useNavigate } from "react-router-dom";
import ProgramsSection from "../Programs/ProgramsSection";

const Programs12Page = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };
  return (
    <div className="programs12-container">
      {/* TODO Make this section on component <HeroSection /> */}
      <div className="hero-section">
        <h1>Mëso fushë të re në vetëm 2 muaj</h1>
        <button className="apply-bbtn" onClick={handleApplyClick}>
          Apply Now <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      {/* TODO Make this section on component <StatsSection /> */}
      <div className="stats-section">
        <div className="stat-box">
          <h2>+6000</h2>
          <p>Studentë të trajnuar</p>
        </div>

        <div className="stat-box">
          <h2>95%</h2>
          <p>Studentë të punësuar</p>
        </div>

        <div className="stat-box">
          <h2>42</h2>
          <p>Trajnerë të punësuar</p>
        </div>

        <div className="stat-box">
          <h2>6</h2>
          <p>Vite nga themelimi</p>
        </div>

        <div className="stat-box">
          <h2>3</h2>
          <p>Shtete me prezencë fizike</p>
        </div>
      </div>
      <ProgramsSection />
      <OurTeam />
    </div>
  );
};

export default Programs12Page;
