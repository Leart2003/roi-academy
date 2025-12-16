import "./SixMonthSection.css"

import ApplicationForm from "../ApplicationForm/ApplicationForm"

const ApplyForm = ({ title, description }) => {
  return (
    <>
      <div className="main-container">
        <div className="left-div">
          <h1 className="apply-title">{title}</h1>
          <p className="description">{description}</p>

          <button className="apply-button">Apply Now →</button>
        </div>

        <ApplicationForm isDark={true} hideInterestedInput={true}/>
      </div>
    </>
  )
}

export default ApplyForm
