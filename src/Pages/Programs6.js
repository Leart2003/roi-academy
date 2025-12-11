import OurTeam from "../components/OurTeam/OurTeam"
import SixMonthSection from "../components/SixMonthSection/SixMonthSection"
import MonthlyPrograms from "../components/MonthlyProgram/MonthlyProgram"
import ImageSlider from "../components/ImageSlider/ImageSlider"
import StudentFeedback from "../components/StudentFeedback/StudentFeedback"
import StatsSection from "../Pages/StatsSection"
const Programs6 = () => {
  return (
    <div>
      <SixMonthSection title={"Bëhu profesionist në vetëm 6 muaj"} />
      <StatsSection />
      <MonthlyPrograms />
      <StudentFeedback />
      <OurTeam />
      <ImageSlider />
    </div>
  )
}

export default Programs6
