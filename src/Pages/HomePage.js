import Loginform from "../components/Loginform/Loginform";
import MonthlyProgram from "../components/MonthlyProgram/MonthlyProgram";
import ProgramsSection from "../components/Programs/ProgramsSection";
import OurTeam from "../components/OurTeam/OurTeam";

function HomePage() {
  return (
    <>
      <Loginform />
      <MonthlyProgram />
      <ProgramsSection />
      <OurTeam />
    </>
  );
}

export default HomePage;
