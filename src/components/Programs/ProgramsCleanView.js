import React from "react";
import ProgramCard from "./ProgramCard";
import "./Programs.css";
import ProgramsData from "./ProgramsData";

const ProgramsCleanView = () => {
  return (
      <div className="programs-grid">
        {ProgramsData.map((item) => (
          <ProgramCard
            key={item.id}
            title={item.title}
            installments={item.installments}
            methodology={item.methodology}
            bullets={item.bullets}
            badgeColor={item.badgeColor}
          />
        ))}
      </div>
  );
};

export default ProgramsCleanView;
