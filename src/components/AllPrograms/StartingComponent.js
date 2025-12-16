import React from "react";
import "./StartingComponent.css";
import { useNavigate } from "react-router-dom";

const StartingComponent = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };
  return (
    <section className="program-sectioni-s">
      <div className="program-containeri-s">
        <div className="program-lefti-s">
          <h2 className="subttitlei-s">Bëhu profesionist në vetëm 6 muaj</h2>

          <button className="apply-btnn-s" onClick={handleApplyClick}>
            Apply Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <form className="program-formmi-s">
          <div className="roww-s">
            <div className="fielddi-s">
              <label>Emër</label>
              <input type="text" />
            </div>

            <div className="fielddi-s">
              <label>Mbiemër</label>
              <input type="text" />
            </div>
          </div>

          <div className="fielddi-s">
            <label>Numri telefonit</label>
            <input type="text" />
          </div>

          <div className="fielddi-s">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="fielddi-s">
            <label>Message</label>
            <textarea rows="4"></textarea>
          </div>

          <button className="submit-btnn-s">SUBMIT APLICATION</button>
        </form>
      </div>
    </section>
  );
};

export default StartingComponent;
