import React from "react";
import "./CertificationStructure.css";

const CertificationStructure = () => {
  return (
    <div className="cert-practice">
      <div className="cert-item">
        <h2>Certifikimi</h2>
        <div className="box">
          <p>
            Pas përfundimit me sukses të programit 6-mujor për Marketing
            Digjital, çdo pjesëmarrës pajiset me 6 certifikata, një për secilin
            modul të përfunduar. Certifikatat janë të njohura në tregun vendor
            dhe shërbejnë si dëshmi e aftësive të fituara gjatë trajnimit. Ato
            janë të vlefshme për punësim, aplikim në projekte, bashkëpunime me
            kompani apo nisjen e një karriere si freelancer.
          </p>
        </div>
      </div>

      <div className="cert-item">
        <h2>Praktika e garantuar</h2>
        <div className="box">
          <p>
            Paralelisht me ligjëratat, pjesëmarrësit angazhohen në një praktikë
            6-mujore, ku punojnë në projekte reale nën mentorimin e
            profesionistëve të kompanive partnere. Praktika ofrohet në formatin
            fizik dhe online dhe është e strukturuar për të ndihmuar studentët
            të aplikojnë njohuritë e fituara në situata konkrete të tregut të
            punës. Në përfundim, pjesëmarrësit përfitojnë edhe një referencë
            pune, e cila pasqyron përvojën praktike dhe u jep një avantazh të
            konsiderueshëm në procesin e punësimit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationStructure;
