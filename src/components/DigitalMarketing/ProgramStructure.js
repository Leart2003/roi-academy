import React from "react";
import "./ProgramStructure.css";

const ProgramStructure = () => {
  return (
    <section className="program-section">
      <h2>Struktura e Programit dhe Formati i Mësimit</h2>
      <p>
        Programi zhvillohet për një periudhë prej <strong>6 muajsh</strong>, me
        një kombinim të leksioneve teorike dhe praktikës intensive:
      </p>

      <div className="program-lists">
        <ul>
          <li>
            Lgjëratat zhvillohen 2 herë në javë nga ora 18:00–20:15, në formatin
            online, fizikisht ose sistem të kombinuar.
          </li>

          <li>
            Regjistrimi i ligjëratave, për të siguruar që studentët kanë qasje
            të vazhdueshme në materialet mësimore.
          </li>
        </ul>

        <ul>
          <li>
            Praktikë 6-mujore, e cila zhvillohet paralelisht me kursin dhe mund
            të ndiqet online ose fizikisht.
          </li>

          <li>
            Mësimi praktik në kompani, i cili realizohet në ambientet e Sharp
            Group, ku pjesëmarrësit do të angazhohen në projekte reale të
            zhvillimit të softuerit.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgramStructure;
