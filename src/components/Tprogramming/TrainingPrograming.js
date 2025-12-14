import React from "react";
import "./TrainingPrograming.css";
import { useNavigate } from "react-router-dom";

const TrainingPrograming = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };
  return (
    <section className="program-sectioon">
      <div className="program-container">
        <div className="program-left">
          <h1 className="tittle">PROGRAMIM</h1>
          <h2 className="subttitle">
            6 muaj trajnim & 6 muaj <br /> praktikë
          </h2>

          <p className="dessc">
            Programimi është një nga profesionet më të kërkuara dhe të paguara
            në tregun vendor dhe ndërkombëtar. Me zhvillimin e teknologjisë,
            kërkesa për profesionistë të aftë në programim vazhdon të rritet,
            duke ofruar mundësi të shumta punësimi.
          </p>

          <button className="apply-btnn" onClick={handleApplyClick}>
            Apply Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <form className="program-formm">
          <div className="roww">
            <div className="fieldd">
              <label>Emër</label>
              <input type="text" />
            </div>

            <div className="fieldd">
              <label>Mbiemër</label>
              <input type="text" />
            </div>
          </div>

          <div className="fieldd">
            <label>Numri telefonit</label>
            <input type="text" />
          </div>

          <div className="fieldd">
            <label>Email</label>
            <input type="email" />
          </div>

          <div className="fieldd">
            <label>Message</label>
            <textarea rows="4"></textarea>
          </div>

          <button className="submit-btnn">SUBMIT APLICATION</button>
        </form>
      </div>
    </section>
  );
};

export default TrainingPrograming;
