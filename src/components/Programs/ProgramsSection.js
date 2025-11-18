import React from "react";
import ProgramCard from "./ProgramCard";
import "./Programs.css";
import ProgramsData from "./ProgramsData";

const ProgramsSection = () => {
  return (
    <section className="programs-section">
      <div className="programs-header">
        <h1>Programet 1-2 Mujore</h1>
        <button className="all-programs-btn">Të gjitha programet</button>
      </div>

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
    </section>
  );
};

export default ProgramsSection;
