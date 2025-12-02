import React from "react";
import "./ApplicationForm.css";

export default function ApplicationForm() {
  return (
    <div className="form-wrappeer">
      <h1 className="form-tittle">Apliko dhe përfito nga oferta aktuale</h1>
      <p className="form-suub">
        Për të aplikuar, ju lutem plotësoni fushat më poshtë:
      </p>

      <form className="aapp-form" onSubmit={(e) => e.preventDefault()}>
        <div className="roow two-cols">
          <label className="fiield">
            <span className="laabel-text">Emër</span>
            <input className="inpuut" type="text" name="firstName" />
          </label>

          <label className="fiield">
            <span className="laabel-text">Mbiemër</span>
            <input className="inpuut" type="text" name="lastName" />
          </label>
        </div>

        <label className="fiield">
          <span className="laabel-text">Numri telefoni</span>
          <input className="inpuut" type="tel" name="phone" />
        </label>

        <label className="fiield">
          <span className="laabel-text">Email</span>
          <input className="inpuut" type="email" name="email" />
        </label>

        <label className="fiield">
          <span className="laabel-text">Për cilin trajnim jeni i/e interesuar?</span>
          <input className="inpuut" type="text" name="training" />
        </label>

        <label className="fiield">
          <span className="laabel-text">Message</span>
          <textarea className="texttarea" name="message" rows="6" />
        </label>

        <div className="suubmit-row">
          <button type="submit" className="subbmit-btn">
            SUBMIT APLICATION
          </button>
        </div>
      </form>
    </div>
  );
}
