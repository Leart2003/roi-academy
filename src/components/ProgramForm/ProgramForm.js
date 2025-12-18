import "./Programform.css";
const ProgramForm = () => {
  return (
    <div className="program-form-wrapper">
      <form className="program-form">
        <div className="row">
          <div className="form-first-row">
            <div>
              <label>Emër</label>
              <input className="input" type="text" />
            </div>

            <div>
              <label>Mbiemër</label>
              <input className="input" type="text" />
            </div>
          </div>
        </div>

        <div className="field full">
          <label>Numri telefonit</label>
          <input className="input" type="text" />
        </div>

        <div className="field full">
          <label>Email</label>
          <input className="input" type="email" />
        </div>

        <div className="field full">
          <label>Message</label>
          <textarea className="textarea" rows="4"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          SUBMIT APLICATION
        </button>
      </form>
    </div>
  );
};

export default ProgramForm;
