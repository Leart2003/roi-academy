import React from "react";

export default function ApplyOfferForm() {
  return (
    <div className="appForm-section">
      <h1 className="appForm-title">Apliko dhe përfito nga oferta aktuale</h1>
      <p className="appForm-subtitle">
        Për të aplikuar, ju lutem plotësoni fushat më poshtë:
      </p>

      <form className="appForm-box">
        <div className="appForm-row">
          <div className="appForm-field">
            <label>Emër</label>
            <input type="text" />
          </div>

          <div className="appForm-field">
            <label>Mbiemër</label>
            <input type="text" />
          </div>
        </div>

        <div className="appForm-field">
          <label>Numri telefonit</label>
          <input type="text" />
        </div>

        <div className="appForm-field">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="appForm-field">
          <label>Message</label>
          <textarea></textarea>
        </div>

        <button type="submit" className="appForm-submit">
          SUBMIT APLICATION
        </button>
      </form>
    </div>
  );
}
