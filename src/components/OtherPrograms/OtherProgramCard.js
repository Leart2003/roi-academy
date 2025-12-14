import "./OtherPrograms.css"
const OtherProgramCard = ({ program }) => {
  return (
    <div className="course-Card">
      <img className="course-Img" src={program.imageUrl} />
      <div className="course-body">
        <span
          className="course-Badge"
          style={{ backgroundColor: program.backgroundColor }}
        >
          {program.methodology}
        </span>

        <span className="course-Rating">
          {program.rating && program.numberOfRating
            ? `⭐ ${program.rating} (${program.rating})`
            : ""}
        </span>
        <p className="course-Title">
          {program.title}| {program.duration}
        </p>
        <p className="course-Description">{program.description}</p>
      </div>
      <div className="course-Footer">
        <p className="Installments">{program.installments}</p>

        <button className="apply-Btn">Apply Now</button>
      </div>
    </div>
  )
}

export default OtherProgramCard
