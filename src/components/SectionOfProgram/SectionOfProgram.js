import "./SectionOfProgram.css";

const SectionOfProgram = () =>{

const moduleList = [
    'Digital Marketing (3 muaj)',
    'Dizajn Grafik (3 muaj)',
    'Video Editing (3 muaj)',
    'Video Animacion (3 muaj)'
  ];

return(

 <section className="program-section" aria-label="Viti 1: Krjimitari digjtale dhe komunikim vizual">
      <h2 className="title">Viti 1: Krjimtari digjtale dhe komunikim vizual</h2>

      <ul className="module-list">
        {moduleList.map((m, idx) => (
          <li key={idx} className="module-item">{m}</li>
        ))}
      </ul>

      <p className="description">
        Te rinjte mesojne si te krijojne pershmebertijet, te ndertoune identitet vizual dhe te zhvillojne aftesi komunikues ne boten digjtale.
      </p>
    </section> 

);


}


export default SectionOfProgram;