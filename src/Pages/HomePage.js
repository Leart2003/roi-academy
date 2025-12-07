import Blog from "../components/Blog/Blog";
import Loginform from "../components/Loginform/Loginform";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ProgramsSection from "../components/Programs/ProgramsSection";
import MonthlyProgram from "../components/MonthlyProgram/MonthlyProgram";
import OurTeam from "../components/OurTeam/OurTeam";
import StudentFeedback from "../components/StudentFeedback/StudentFeedback";

function HomePage() {
  return (
    <div>
      <Loginform />
      <MonthlyProgram />
      <ProgramsSection />
      <StudentFeedback />
      <OurTeam />
      <Blog />
      <ImageSlider />
    </div>
  );
}

export default HomePage;
