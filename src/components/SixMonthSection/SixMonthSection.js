import "./SixMonthSection.css"

import ProgramForm from "../ProgramForm/ProgramForm"

const ApplyForm = ({ title, description }) => {
  return (
    <>
      <div className="main-container">
        <div className="left-div">
          <h1 className="apply-title">{title}</h1>
          <p className="description">{description}</p>

          <button className="apply-button">Apply Now →</button>
        </div>

        <ProgramForm />
      </div>
    </>
  )
}

export default ApplyForm
