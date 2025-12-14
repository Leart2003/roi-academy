import "./TrainingCard.css";

const TrainingCard = () => {
  return (
    <div className="training-container">
      <h2 className="title">Çfarë do të mësoni gjatë trajnimit?</h2>

      <p className="subtitle">
        Gjatë këtij programi të specializuar 6-mujor, do të mësoni teknologjitë
        më të kërkuara në zhvillimin e aplikacioneve web dhe softuerike:
      </p>

      <div className="grid">
        <div className="card">
          <h3>HTML5 & CSS3</h3>
          <p>
            Bazat e ndërtimit të faqeve web, dizajni i ndërfaqeve të
            përdoruesit.
          </p>
        </div>

        <div className="card">
          <h3>MongoDB</h3>
          <p>Bazat e të dhënave, ruajtja dhe menaxhimi i informacionit.</p>
        </div>

        <div className="card">
          <h3>JavaScript</h3>
          <p>Programimi dinamik për aplikacione interaktive.</p>
        </div>

        <div className="card">
          <h3>Git & GitHub</h3>
          <p>Kontrolli i versioneve dhe bashkëpunimi në projekte.</p>
        </div>

        <div className="card">
          <h3>React & Advanced React</h3>
          <p>
            Zhvillimi i aplikacioneve moderne me teknologjinë më të avancuar
            frontend.
          </p>
        </div>

        <div className="card">
          <h3>Node.js</h3>
          <p>Zhvillimi backend dhe krijimi i API-ve të fuqishme.</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
