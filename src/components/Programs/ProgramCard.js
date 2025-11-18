import React from "react";

const ProgramCard = ({ title, installments, methodology, bullets, badgeColor }) => {
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
        <button className="apply-btnn">Apply Now</button>
      </div>
    </div>
  );
};

export default ProgramCard;
