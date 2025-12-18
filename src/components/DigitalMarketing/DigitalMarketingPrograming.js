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
      <div className="program-container-a">
        <div className="program-left-a">
          <h1 className="tittle-a">DIGITAL MARKETING</h1>
          <h2 className="subttitle-a">6 muaj trajnim & 6 muaj praktikë</h2>

          <p className="dessc-a">
            Marketingu Digjital është një nga profesionet më të kërkuara në
            tregun vendor dhe ndërkombëtar të punës.
          </p>

          <button className="apply-btnn-a" onClick={handleApplyClick}>
            Apply Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <ApplicationForm hideInterestedInput={true} isDark={true} />
      </div>
    </section>
  );
};

export default DigitalMarketingPrograming;
