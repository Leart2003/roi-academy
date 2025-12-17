import BlogList from "../components/BlogList/BlogList"
import Loginform from "../components/Loginform/Loginform"
import ImageSlider from "../components/ImageSlider/ImageSlider"
import ProgramsSection from "../components/Programs/ProgramsSection"
import MonthlyProgram from "../components/MonthlyProgram/MonthlyProgram"
import OurTeam from "../components/OurTeam/OurTeam"
import StudentFeedback from "../components/StudentFeedback/StudentFeedback"
import AboutRoi from "../components/AboutRoi/aboutroi"
import StatsSection from "./StatsSection"

function HomePage() {
  return (
    <div>
      <Loginform />
      <StatsSection isDark={true} />
      <MonthlyProgram />
      <ProgramsSection />
      <AboutRoi />
      <StudentFeedback />
      <OurTeam />
      <BlogList />
      <ImageSlider />
    </div>
  )
}

export default HomePage
