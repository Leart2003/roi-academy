import "./TrainingCard.css";

const defaultItems = [
  {
    title: "HTML5 & CSS3",
    text: "Bazat e ndërtimit të faqeve web, dizajni i ndërfaqeve të përdoruesit.",
  },
  {
    title: "MongoDB",
    text: "Bazat e të dhënave, ruajtja dhe menaxhimi i informacionit.",
  },
  {
    title: "JavaScript",
    text: "Programimi dinamik për aplikacione interaktive.",
  },
  {
    title: "Git & GitHub",
    text: "Kontrolli i versioneve dhe bashkëpunimi në projekte.",
  },
  {
    title: "React & Advanced React",
    text: "Zhvillimi i aplikacioneve moderne me teknologjinë më të avancuar frontend.",
  },
  {
    title: "Node.js",
    text: "Zhvillimi backend dhe krijimi i API-ve të fuqishme.",
  },
];

const TrainingCard = ({ description, items = defaultItems }) => {
  return (
    <div className="training-container">
      <h2 className="title">Çfarë do të mësoni gjatë trajnimit?</h2>

      <p className="subtitle">{description}</p>

      <div className="grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCard;
