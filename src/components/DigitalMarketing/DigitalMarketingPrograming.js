import React from "react";
import "./DigitalMarketingPrograming.css";
import { useNavigate } from "react-router-dom";

const DigitalMarketingPrograming = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };
  return (
    <section className="program-sectioni">
      <div className="program-containeri">
        <div className="program-lefti">
          <h1 className="tittlei">DIGITAL MARKETING</h1>
          <h2 className="subttitlei">6 muaj trajnim & 6 muaj praktikë</h2>

          <p className="dessci">
            Marketingu Digjital është një nga profesionet më të kërkuara në
            tregun vendor dhe ndërkombëtar të punës.
          </p>

          <button className="apply-btnn" onClick={handleApplyClick}>
            Apply Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <form className="program-formmi">
          <div className="roww">
            <div className="fielddi">
              <label>Emër</label>
              <input type="text" />
            </div>

            <div className="fielddi">
              <label>Mbiemër</label>
              <input type="text" />
            </div>
          </div>

          <div className="fielddi">
            <label>Numri telefonit</label>
            <input type="text" />
          </div>

          <div className="fielddi">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="fielddi">
            <label>Message</label>
            <textarea rows="4"></textarea>
          </div>

          <button className="submit-btnn">SUBMIT APLICATION</button>
        </form>
      </div>
    </section>
  );
};

export default DigitalMarketingPrograming;
