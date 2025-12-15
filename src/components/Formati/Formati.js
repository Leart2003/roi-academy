import "./Formati.css"

const Formati = ({
  title,
  text,
  reverse = false,
  bgColor,
  radius,
  radius2,
}) => {
  return (
    <section style={{ backgroundColor: bgColor }} className="learning-formats">
      <div
        className={`learning-container ${
          reverse ? "learning-container--reverse" : ""
        }`}
      >
        <div className="learning-text">
          <h2>{title}</h2>
          <p>{`${text}`}</p>
        </div>

        <div className="learning-images-wrapper">
          <img
            style={{ borderRadius: radius }}
            className="learning-images"
            src="https://roiacademy.net/wp-content/uploads/2025/06/DSC04763-1024x683.jpg"
            alt="Online learning"
          />
          <img
            style={{ borderRadius: radius2 }}
            className="learning-images2"
            src="https://roiacademy.net/wp-content/uploads/2025/06/DSC00607-1024x683.jpg"
            alt="Physical classroom"
          />
        </div>
      </div>
    </section>
  )
}

export default Formati
