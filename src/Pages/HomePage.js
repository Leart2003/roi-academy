import Blog from "../components/Blog/Blog";
import Loginform from "../components/Loginform/Loginform";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ProgramsSection from "../components/Programs/ProgramsSection";
import MonthlyProgram from "../components/MonthlyProgram/MonthlyProgram";
import OurTeam from "../components/OurTeam/OurTeam";
import StudentFeedback from "../components/StudentFeedback/StudentFeedback";
import StatCard from "../components/StatCard/StatCard";
import CyberSecurity from "../components/CyberSecurity/CyberSecurity";
import AboutRoi from "../components/AboutRoi/aboutroi";

function HomePage() {
  return (
    <div>
      <Loginform />
      <MonthlyProgram />
      <ProgramsSection />
      <AboutRoi />
      <StudentFeedback />
      <OurTeam />
      <Blog />
      <ImageSlider />
      <StatCard/>
      <CyberSecurity/>
    </div>
  );
}

export default HomePage;
