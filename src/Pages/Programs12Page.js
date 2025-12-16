import "./Programs12Page.css";
import OurTeam from "../components/OurTeam/OurTeam";
import { useNavigate } from "react-router-dom";
import StatsSection from "./StatsSection";
import StudentFeedback from "../components/StudentFeedback/StudentFeedback";
import ProgramsCleanView from "../components/Programs/ProgramsCleanView";
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";

const Programs12Page = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };
  return (
    <div className="programs12-container">
      <div className="hero-section">
        <div>
          <h1>Mëso fushë të re në vetëm 2 muaj</h1>
          <button className="apply-bbtn" onClick={handleApplyClick}>
            Apply Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <ApplicationForm isDark={true} hideInterestedInput={true} />
      </div>
      <StatsSection />
      <ProgramsCleanView />
      <StudentFeedback />
      <OurTeam />
    </div>
  );
};

export default Programs12Page;
