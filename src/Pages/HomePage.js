import Loginform from "../components/Loginform/Loginform";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProgramsSection from "../components/Programs/ProgramsSection";
import MonthlyProgram from "../components/MonthlyProgram/MonthlyProgram";
import OurTeam from "../components/OurTeam/OurTeam";
import StatCard from "../components/StatCard/StatCard";

function HomePage() {
  return (
    <div>
      <Header />
      <Loginform />
      <MonthlyProgram />
      <ProgramsSection />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default HomePage;
