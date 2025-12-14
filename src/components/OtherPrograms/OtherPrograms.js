import data from "../../Data/otherProgramsData"
import OtherProgramCard from "./OtherProgramCard"
import "./OtherPrograms.css"

const OtherPrograms = ({ title }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="cards-Wrapper">
        {data.map((p) => (
          <OtherProgramCard key={p.id} program={p} />
        ))}
      </div>
    </>
  )
}

export default OtherPrograms
