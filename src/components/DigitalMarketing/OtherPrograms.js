import programet6mujore from "../../Data/programet6mujore";  
import CourseCard from "../MonthlyProgram/CourseCard";
import "../MonthlyProgram/MonthlyProgram.css";

const OtherPrograms = () => {
  
  const selectedNames = ["Programim", "Digital Marketing","Cyber Security", "Design & Video"];

  const filteredPrograms = programet6mujore.filter(program =>
    selectedNames.includes(program.emriProgramit)
  );

  return (
    <div className="programet-tjera-section">
      <h2>Programet tjera</h2>
      <div className="cards-wrapper">
        {filteredPrograms.map((item) => (
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

export default OtherPrograms;
