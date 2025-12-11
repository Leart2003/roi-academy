import ImageSlider from "../components/ImageSlider/ImageSlider"
import OtherPrograms from "../components/OtherPrograms/OtherPrograms"
import OurTeam from "../components/OurTeam/OurTeam"
import SixMonthSection from "../components/SixMonthSection/SixMonthSection"
import StudentFeedback from "../components/StudentFeedback/StudentFeedback"
import StatsSection from "./StatsSection"

const RoiKids = () => {
  return (
    <div>
      <SixMonthSection
        title={"ROI Kids Akademia e Teknologjisë për Fëmijë"}
        description={
          "Në një botë ku teknologjia ndryshon me ritme të shpejta, është thelbësore që fëmijët të mësojnë jo vetëm ta përdorin, por edhe ta krijojnë atë."
        }
      />
      <StatsSection />
      {/* {Missing component} */}
      {/* {Missing component} */}
      {/* {Missing component} */}
      {/* {Missing component} */}
      <StudentFeedback />
      <OurTeam />
      <ImageSlider />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SixMonthSection
          title={"Apliko dhe përfito nga oferta aktuale"}
          description={"Për të aplikuar, ju lutem plotësoni fushat më poshtë:"}
        />
      </div>
      <OtherPrograms title="Programet tjera" />
    </div>
  )
}

export default RoiKids
