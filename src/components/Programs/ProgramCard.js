import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramCard = ({
  title,
  installments,
  methodology,
  bullets,
  badgeColor,
}) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };

  return (
    <div className="program-card">
      <span className="program-badge" style={{ backgroundColor: badgeColor }}>
        {methodology}
      </span>

      <h2 className="program-title">{title}</h2>

      <ul className="program-details">
        {bullets.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>

      <div className="program-bottom">
        <span className="installments">{installments}</span>
        <button className="applyy-btnn" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
