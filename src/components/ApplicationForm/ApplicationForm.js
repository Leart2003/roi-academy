import "./ApplicationForm.css";

const ApplicationForm = ({isDark, hideInterestedInput}) => {

return (
    <div className={isDark ? "registration-form-dark" : "registration-form"}>
        <form className="form-wrapper">
            <div className="form-line">
                <div className="input-group">
                    <label htmlFor="name">Emër</label>
                    <input id="name" type="text" />
                </div>
                <div className="input-group">
                    <label htmlFor="surname">Mbiemër</label>
                    <input id="surname" type="text" />
                </div>
            </div>

            <div className="form-line">
                <div className="input-group">
                    <label htmlFor="phone">Numri i telefonit</label>
                    <input id="phone" type="tel" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" />
                </div>
            </div>

            {!hideInterestedInput &&  <div className="input-group full-field">
                <label htmlFor="training">Për cilin trajnim jeni i/e interesuar?</label>
                <input id="training" type="text" />
            </div>}

            <div className="input-group full-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" />
            </div>

            <button type="submit" className="form-submit-button">
                SUBMIT APPLICATION
            </button>
        </form>
    </div>
);
};

export default ApplicationForm;
