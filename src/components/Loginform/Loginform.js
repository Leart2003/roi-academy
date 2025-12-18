import { useNavigate } from "react-router";
import "./Loginform.css";
import ProgramForm from "../ProgramForm/ProgramForm";

const Loginform = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };

  return (
    <div className="home-intro-container">
      <img
        src="/assets/images/background-image.jpg"
        alt="Background"
        className="background-image"
      />
      <div className="app-wrapper">
        <div className="hero-text">
          <h1>
            KRIJO NJË KARRIERË <br /> TË SUKSESSHME ME <br />
            <strong>ROI ACADEMY</strong>
          </h1>
          <p>
            ROI Academy është institucion lider në ofrimin e trajnimeve
            profesionale në Kosovë, Shqipëri dhe Maqedoni të Veriut.
          </p>
          <button className="hero-button" onClick={handleApplyClick}>
            Apliko Tani <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <ProgramForm />
      </div>
    </div>
  );
};

export default Loginform;
