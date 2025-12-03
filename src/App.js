import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Programs12Page from "./Pages/Programs12Page"
import ApplicationForm from "./Pages/ApplicationForm"
import HomePage from "./Pages/HomePage"
import Programs6 from "./Pages/Programs6"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programet-1-2-mujore" element={<Programs12Page />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/Programs6" element={<Programs6 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
