import ImageSlider from "../components/ImageSlider/ImageSlider";
import OurTeam from "../components/OurTeam/OurTeam";
import StudentFeedback from "../components/StudentFeedback/StudentFeedback";
import ApplyOfferForm from "../components/Tprogramming/ApplyOfferForm";
import CertificationStructure from "../components/Tprogramming/CertificationStructure";
import OtherPrograms from "../components/Tprogramming/OtherPrograms";
import ProgramStructure from "../components/Tprogramming/ProgramStructure";
import SuccessText from "../components/Tprogramming/SuccessText";
import TrainingCard from "../components/Tprogramming/TrainingCard";
import TrainingPrograming from "../components/Tprogramming/TrainingPrograming";
import WhyChooseProgram from "../components/Tprogramming/WhyChooseProgram";
import StatsSection from "./StatsSection";

const TrainingProgrammingPage = () => {
  return (
    <div>
      <TrainingPrograming />
      <StatsSection />
      <TrainingCard />
      <WhyChooseProgram />
      <ProgramStructure />
      <CertificationStructure />
      <StudentFeedback />
      <OurTeam />
      <SuccessText />
      <ApplyOfferForm />
      <OtherPrograms />
      <ImageSlider />
    </div>
  );
};

export default TrainingProgrammingPage;
