import "./TeamCard.css";

function TeamCard({ name, role, img }) {
  return (
    <div className="team-card">
      <img src={img} alt={name} className="team-img" />

      <div className="team-text">
        <span className="name">{name}</span>
        <span className="role">{role}</span>
      </div>
    </div>
  );
}

export default TeamCard;
