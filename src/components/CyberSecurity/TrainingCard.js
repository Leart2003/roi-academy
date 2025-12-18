import "./TrainingCard.css";

const TrainingCardM = () => {
  return (
    <div className="training-container">
      <h2 className="title">Çfarë do të mësoni gjatë trajnimit?</h2>

      <p className="subtitle">
        Programi përfshin module të avancuara që mbulojnë të gjitha aspektet
        kryesore të sigurisë kibernetike:
      </p>

      <div className="grid">
        <div className="card">
          <h3>Hyrje në Siguri Kibernetike</h3>
          <p>Njohuri bazë për kërcënimet dhe mbrojtjen e sistemeve.</p>
        </div>

        <div className="card">
          <h3>Hakimi Etik (Penetration Testing)</h3>
          <p>
            Testimi dhe auditimi i sistemeve për qëndrueshmëri dhe identifikimin
            e dobësive.
          </p>
        </div>

        <div className="card">
          <h3>Siguria e Sistemeve Operative</h3>
          <p>Mbrojtja e platformave Windows dhe Linux.</p>
        </div>

        <div className="card">
          <h3>Politikat, Implikimet dhe Aspektet Ligjore</h3>
          <p>
            Regulloret dhe standardet e sigurisë kibernetike në nivel
            ndërkombëtar.
          </p>
        </div>

        <div className="card">
          <h3>Siguria e Rrjetave</h3>
          <p>Identifikimi dhe parandalimi i sulmeve kibernetike në rrjete.</p>
        </div>

        <div className="card">
          <h3>Siguria e Aplikacioneve Web</h3>
          <p>Metodat për mbrojtjen e faqeve dhe aplikacioneve online.</p>
        </div>

        <div className="card">
          <h3>Menaxhimi dhe Përgjigja ndaj Incidenteve Kibernetike</h3>
          <p>Strategjitë për mbrojtje dhe rikuperim nga sulmet. </p>
        </div>

        <div className="card">
          <h3>Cloud Security dhe IoT Security</h3>
          <p>
            Mbrojtja e sistemeve të bazuara në cloud dhe pajisjeve të lidhura në
            internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCardM;
