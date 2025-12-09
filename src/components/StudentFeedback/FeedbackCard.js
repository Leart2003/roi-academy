import "./StudentFeedback.css";

function FeedbackCard({ name, course, img, comment }) {
  return (
    <div className="feedback-card">
      <div className="feedback-info">
        <img src={img} alt={name} className="student-img" />

        <div className="feedback-text">
          <span className="name">{name}</span>
          <span className="role">{course}</span>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
}

export default FeedbackCard;
