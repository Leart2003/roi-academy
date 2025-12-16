import MonthlyProgram from "./MonthlyProgram"
import programet6mujore from "../../Data/programet6mujore"
import "./MonthlyProgram.css"

const CourseCard = ({
  imageUrl,
  emriProgramit,
  backgroundColor,
  koha,
  methodology,
  description,
  rating,
  numberRatings,
  pagesa,
  onClickApply,
}) => {
  return (
    <div className="course-card">
      <img className="course-img" src={imageUrl} />
      <div className="course-body">
        <span
          className="course-badge"
          style={(backgroundColor = { backgroundColor })}
        >
          {methodology}
        </span>
        <span className="course-rating">
          {rating && numberRatings ? `⭐ ${rating} (${numberRatings})` : ""}
        </span>
        <p className="course-title">
          {emriProgramit}| {koha}
        </p>
        <p className="course-description">{description}</p>
      </div>
      <div className="course-footer">
        <p className="installments">{pagesa}</p>
        <button className="apply-btn" onClick={onClickApply}>Apply Now</button>
      </div>
    </div>
  )
}

export default CourseCard
