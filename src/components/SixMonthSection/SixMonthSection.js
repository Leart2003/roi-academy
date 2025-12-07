import "./SixMonthSection.css"

import ProgramForm from "../ProgramForm/ProgramForm"

const ApplyForm = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-div">
          <h1 className="apply-title">Bëhu profesionist në vetëm 6 muaj</h1>
          <button className="apply-button">Apply Now →</button>
        </div>

        <ProgramForm />
      </div>
    </>
  )
}

export default ApplyForm
