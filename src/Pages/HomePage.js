import Blog from "../components/Blog/Blog";
import Loginform from "../components/Loginform/Loginform";
import Header from "../components/Header/Header";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Footer from "../components/Footer/Footer";
import ProgramsSection from "../components/Programs/ProgramsSection";
import MonthlyProgram from "../components/MonthlyProgram/MonthlyProgram";
import OurTeam from "../components/OurTeam/OurTeam";
import StudentFeedback from "../components/StudentFeedback/StudentFeedback";

function HomePage() {
  return (
    <div>
      <Header />
      <Loginform />
      <MonthlyProgram />
      <ProgramsSection />
      <StudentFeedback />
      <OurTeam />
      <Blog />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default HomePage;
