import "./Programform.css"
const ProgramForm = () => {
  return (
    <div className="program-form-wrapper">
      <form className="program-form">
        <div className="row">
          <div className="field">
            <label>Emër</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Mbiemër</label>
            <input type="text" />
          </div>
        </div>

        <div className="field full">
          <label>Numri telefonit</label>
          <input type="text" />
        </div>

        <div className="field full">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="field full">
          <label>Message</label>
          <textarea rows="4"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          SUBMIT APLICATION
        </button>
      </form>
    </div>
  )
}

export default ProgramForm
