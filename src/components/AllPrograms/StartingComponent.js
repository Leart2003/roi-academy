import React from "react";
import "./StartingComponent.css";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

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
        <ApplicationForm isDark={true} />
      </div>
    </section>
  );
};

export default StartingComponent;
