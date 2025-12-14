import "./TrainingCard.css";

const TrainingCard = () => {
  return (
    <div className="training-container">
      <h2 className="title">Çfarë do të mësoni gjatë trajnimit?</h2>

      <p className="subtitle">
        Gjatë këtij programi të specializuar 6-mujor, do të mësoni:
      </p>

      <div className="grid">
        <div className="card">
          <h3>Social Media</h3>
          <ul>
            <li>Krijimi i përmbajtjes vizuale me mjete si Canva dhe CapCut.</li>
            <li>
              Shkrimi i teksteve promovuese (copywriting & content writing) të
              përshtatura për kanale të ndryshme.
            </li>
            <li>
              Aftësimi në përdorimin e platformave si Meta Business Suite për
              menaxhimin dhe reklamimin e përmbajtjes.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Content Creation</h3>
          <ul>
            <li>Krijimi i përmbajtjes vizuale me mjete si Canva dhe CapCut.</li>
            <li>
              Shkrimi i teksteve promovuese (copywriting & content writing) të
              përshtatura për kanale të ndryshme.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>SEO</h3>
          <ul>
            <li>
              KrParimet bazë të SEO dhe optimizimi i faqeve për renditje më të
              mirë në motorët e kërkimit.
            </li>
            <li>
              Zgjedhja e fjalëve kyçe, krijimi i përmbajtjes SEO-friendly dhe
              përdorimi i mjeteve si Google Search Console.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Email Marketing</h3>
          <ul>
            <li>
              Ndërtimi i fushatave të email marketingut me platforma si
              Mailchimp dhe Brevo.
            </li>
            <li>
              Automatizimi i komunikimit dhe segmentimi i listave të kontakteve.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Google Ads</h3>
          <ul>
            <li>
              Konceptimi dhe realizimi i fushatave reklamuese me Google Ads
              (Search & Display).
            </li>
            <li>
              Analiza e performancës së fushatave dhe optimizimi i rezultateve.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Strategy & Planning</h3>
          <ul>
            <li>Përpilimi i strategjisë të marketingut digjital.</li>
            <li>Planifkimi.</li>
            <li>
              Integrimi i kanaleve të marketingut digjital në një strategji të
              unifikuar.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
