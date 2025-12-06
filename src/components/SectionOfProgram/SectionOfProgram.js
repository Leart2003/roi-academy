import "./SectionOfProgram.css";

const SectionOfProgram = () => {
  const cards = [
    {
      title: "Viti 1: Krijimtari digjtale dhe komunikim vizual",
      items: [
        "Digital Marketing (3 muaj)",
        "Dizajn Grafik (3 muaj)",
        "Video Editing (3 muaj)",
        "Video Animacion (3 muaj)"
      ],
      description:
        "Te rinjtë mesojnë si të krijojnë identitet vizual dhe të zhvillojnë aftësi komunikues në botën digjitale."
    },
    {
      title: "Viti 2: Programim dhe Menaxhim Projekteësh",
      items: [
        "Web Development (6 muaj)",
        "Mobile App Development (3 muaj)",
        "Project Management (3 muaj)"
      ],
      description:
        "Fokus në përvetësimin e aftësive praktike dhe metodologjive moderne të zhvillimit software."
    },
    {
      title: "Viti 3: Teknologji të avancuara dhe aftësi menaxheriale",
      items: [
        "Cyber Security (6 muaj)",
        "Data Science (3 muaj)",
        "Sales (1 muaj)",
        "Finance Management (1 muaj)",
        "Human Resources (1 muaj)"
      ],
      description:
        "Nxjerrja në pah të aftësive të menaxhimit të projekteve dhe të përdorimit të teknologive të reja."
    },
    {
      title: "Orari dhe praktika",
      items: [],
      description:
        "Trajnimi zhvillohet 2 here në javë (nën menaxhim të kohës), përfshin praktikë të shpejtë dhe një praktikë të plotë sipas modullit."
    }
  ];

  return (
    <section className="program-section" aria-label="Struktura e programit Future Generations">
      <h2 className="title">Struktura e Programimit “Future Generations”</h2>

      <div className="grid">
        {cards.map((c, i) => (
          <div key={i} className="card">
            <h3 className="card-title">{c.title}</h3>
            {c.items.length > 0 && (
              <ul className="card-list">
                {c.items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            )}
            <p className="card-desc">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionOfProgram;