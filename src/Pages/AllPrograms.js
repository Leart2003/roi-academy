import StudentFeedback from "../components/StudentFeedback/StudentFeedback";
import OurTeam from "../components/OurTeam/OurTeam";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import StartingComponent from "../components/AllPrograms/StartingComponent";
import StatsSection from "./StatsSection";
import MonthlyProgram from "../components/MonthlyProgram/MonthlyProgram";

const AllPrograms = () => {
  return (
    <>
      <StartingComponent />
      <StatsSection />
      <MonthlyProgram />
      <StudentFeedback />
      <OurTeam />
      <ImageSlider />
    </>
  );
};

export default AllPrograms;
