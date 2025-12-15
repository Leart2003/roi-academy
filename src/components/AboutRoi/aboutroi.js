import React from "react";
import "./aboutroi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";

library.add(fas, far, fab);

const AboutRoi = () => {
  const navigate = useNavigate()
  const handleApplyClick = () => {
    navigate("/Rreth-Roit")
  }
  return (
    <div className="about-roi-container">
      <img src="./assets/images/Roi-photo.png" alt="Roi-logo" />

      <div className="about-roi">
        <h2>Rreth ROI Academy</h2>
        <p>
          Ne ofrojmë programe të avancuara dhe të strukturuara, duke përfshirë
          Programe 2-mujore dhe Programe 6-mujore, me trajnim dhe praktikë , të
          cilat ndihmojnë pjesëmarrësit të zhvillojnë aftësi të aplikueshme në
          tregun vendor dhe ndërkombëtar të punës.
        </p>

        <div className="about-roi-list">
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-check"
              className="check-icon"
            />
            Trajnim dhe Certifikim
          </span>

          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-check"
              className="check-icon"
            />
            Praktikë e garantuar me referencë pune
          </span>

          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-check"
              className="check-icon"
            />
            Konsulence të vazhdueshme falas
          </span>

          <button className="about-roi-btn" onClick={handleApplyClick}>Më shumë rreth nesh</button>
        </div>
      </div>
    </div>
  );
};

export default AboutRoi;
