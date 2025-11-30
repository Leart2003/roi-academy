import "./App.css";
import Loginform from "./components/Loginform/Loginform";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProgramsSection from "./components/Programs/ProgramsSection"; // korrigjuar
import MonthlyProgram from "./components/MonthlyProgram/MonthlyProgram";
import OurTeam from "./components/OurTeam/OurTeam";
import FutureGeneration from "./components/FutureGeneration/FutureGeneration";
import StatCard from "./components/StatCard/StatCard";
import SectionOfProgram from "./components/SectionOfProgram/SectionOfProgram";

function App() {
  return (
    <div className="App">
      <Header />
      <Loginform
        title="Krijo një karrierë të suksesshme me ROI Academy"
        description="ROI Academy është institucion lider në ofrimin e trajnimeve profesionale në Kosovë, Shqipëri dhe Maqedoni të Veriut."
        buttonText="Apply Now"
      />
      <MonthlyProgram />
      <ProgramsSection />
      <OurTeam />
      <Footer />
      <FutureGeneration />
      <StatCard />
      <SectionOfProgram />
    </div>
  );
}

export default App;
