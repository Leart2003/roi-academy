import ImageSlider from "../components/ImageSlider/ImageSlider"
import OurTeam from "../components/OurTeam/OurTeam"
import StudentFeedback from "../components/StudentFeedback/StudentFeedback"
import StatsSection from "./StatsSection"
import RoiHero from "../components/Roi-hero/roiHero"
import RrethNesh from "../components/RrethNesh/rrethNesh"

const RrethRoi = () => {
  return (
    <>
      <RoiHero title={"Rreth ROI Academy"} />
      <StatsSection />
      <RrethNesh />
      {/* Missing component */}
      <StudentFeedback />
      <OurTeam />
      <ImageSlider />
    </>
  )
}

export default RrethRoi
