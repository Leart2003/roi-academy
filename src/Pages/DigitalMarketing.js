import DigitalMarketingPrograming from "../components/DigitalMarketing/DigitalMarketingPrograming";
import StatsSection from "./StatsSection";
import TrainingCard from "../components/DigitalMarketing/TrainingCard";
import WhyChooseProgram from "../components/DigitalMarketing/WhyChooseProgram";
import ProgramStructure from "../components/Tprogramming/ProgramStructure";
import CertificationStructure from "../components/DigitalMarketing/CertificationStructure";
import StudentFeedback from "../components/StudentFeedback/StudentFeedback";
import OurTeam from "../components/OurTeam/OurTeam";
import SuccessText from "../components/DigitalMarketing/SuccessText";
import ApplyOfferForm from "../components/DigitalMarketing/ApplyOfferForm";
import OtherPrograms from "../components/DigitalMarketing/OtherPrograms";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const DigitalMarketing = () => {
  return (
    <>
      <DigitalMarketingPrograming />
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
    </>
  );
};

export default DigitalMarketing;
