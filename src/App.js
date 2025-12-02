import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from "./components/Loginform/Loginform";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProgramsSection from "./components/Programs/ProgramsSection";
import MonthlyProgram from "./components/MonthlyProgram/MonthlyProgram";
import OurTeam from "./components/OurTeam/OurTeam";
import Programs12Page from "./components/Pages/Programs12Page";
import ApplicationForm from "./components/Pages/ApplicationForm";
import HomePage from "./components/Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programet-1-2-mujore" element={<Programs12Page />} />
        <Route path="/application" element={<ApplicationForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
