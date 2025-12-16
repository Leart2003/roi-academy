import React from "react";
import "./DigitalMarketingPrograming.css";
import { useNavigate } from "react-router-dom";

import ApplicationForm from "../ApplicationForm/ApplicationForm";
const DigitalMarketingPrograming = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };
  return (
    <section className="digital-marketing-program-section">
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
        <ApplicationForm hideInterestedInput={true} isDark={true} />
      </div>
    </section>
  );
};

export default DigitalMarketingPrograming;
