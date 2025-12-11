import "./Loginform.css";

const Loginform = ({ title, description, buttonText }) => {
  return (
    <>
      <div className="container">
        <h1>{title}</h1>

        <p>{description}</p>

        <button className="apply-button ">{buttonText || "Apply Now"}</button>
      </div>

      <div className="form-container">
        <form className="application-form">
          <div className="row">
            <div className="field">
              <label htmlFor="name">Emër</label>
              <input id="name" type="text" />
            </div>

            <div className="field">
              <label htmlFor="surname">Mbiemër</label>
              <input id="surname" type="text" />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="phone">Numri i telefonit</label>
              <input id="phone" type="tel" />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
          </div>

          <div className="field full">
            <label htmlFor="training">
              Për cilin trajnim jeni i/e interesuar?
            </label>
            <input id="training" type="text" />
          </div>

          <div className="field full">
            <label htmlFor="message">Mesazhi</label>
            <textarea id="message" rows="4" />
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT APPLICATION
          </button>
        </form>
      </div>
    </>
  );
};

export default Loginform;
