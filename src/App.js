import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Programs12Page from "./Pages/Programs12Page";
import ApplicationForm from "./Pages/ApplicationForm";
import HomePage from "./Pages/HomePage";

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

export default App;
