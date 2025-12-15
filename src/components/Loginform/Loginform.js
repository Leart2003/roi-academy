import { useNavigate } from "react-router";
import "./Loginform.css";

const Loginform = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };

  return (
    <div className="app-wrapper">
      <div className="hero-text">
        <h1>
          KRIJO NJË KARRIERË <br /> TË SUKSESSHME ME <br />
          <strong>ROI ACADEMY</strong>
        </h1>
        <p>
          ROI Academy është institucion lider në ofrimin e trajnimeve
          profesionale në Kosovë,<br /> Shqipëri dhe Maqedoni të Veriut
        </p>
        <button className="hero-button" onClick={handleApplyClick}>
          Apliko<br />Tani <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="registration-form">
        <form className="form-wrapper">
          <div className="form-line">
            <div className="input-group">
              <label htmlFor="name">Emër</label>
              <input id="name" type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="surname">Mbiemër</label>
              <input id="surname" type="text" />
            </div>
          </div>

          <div className="form-line">
            <div className="input-group">
              <label htmlFor="phone">Numri i telefonit</label>
              <input id="phone" type="tel" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
          </div>

          <div className="input-group full-field">
            <label htmlFor="training">Për cilin trajnim jeni i/e interesuar?</label>
            <input id="training" type="text" />
          </div>

          <div className="input-group full-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" />
          </div>

          <button type="submit" className="form-submit-button">
            SUBMIT APPLICATION
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
