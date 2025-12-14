import "./MonthlyProgram.css"
import programet6mujore from "../../Data/programet6mujore"
import CourseCard from "./CourseCard"
import "./MonthlyProgram.css"

const MonthlyProgram = () => {
  return (
    <div>
      <h2>Programet 6-12 mujore</h2>
      <button className="apply-btn">Të gjitha programet</button>
      <div className="cards-wrapper">
        {programet6mujore.map((item) => (
          <CourseCard
            key={item.id}
            imageUrl={item.imageUrl}
            emriProgramit={item.emriProgramit}
            backgroundColor={item.backgroundColor}
            koha={item.koha}
            description={item.description}
            rating={item.rating}
            numberRatings={item.numberRatings}
            methodology={item.methodology}
            pagesa={item.pagesa}
          />
        ))}
      </div>
    </div>
  )
}

export default MonthlyProgram
