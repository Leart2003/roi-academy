import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Programs12Page from "./Pages/Programs12Page"
import ApplicationForm from "./Pages/ApplicationForm"
import HomePage from "./Pages/HomePage"
import Programs6 from "./Pages/Programs6"
import Layout from "./components/Layout/Layout"
import TrainingProgrammingPage from "./Pages/TrainingProgrammingPage";


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programet-1-2-mujore" element={<Programs12Page />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/Programs6" element={<Programs6 />}></Route>
        <Route path="/training-programming"element={<TrainingProgrammingPage />}/>
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
