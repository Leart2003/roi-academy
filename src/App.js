import "./App.css";
import Loginform from "./components/Loginform/Loginform";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProgramsSection from "./components/Programs/ProgramsSection";
import MonthlyProgram from "./components/MonthlyProgram/MonthlyProgram";

function App() {
  return (
    <div className="App">
      <Header />
      <Loginform />
      <MonthlyProgram />
      <ProgramsSection />
      <Footer />
    </div>
  );
}

export default App;
