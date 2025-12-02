import "./SectionOfProgram.css"



const cardsData = [
  {
    title: "Viti 1: Krjimtari digjitale dhe komunikim vizual",
    items: [
      "Digital Marketing (3 muaj)",
      "Dizajn Grafik (3 muaj)",
      "Video Editing (3 muaj)",
      "Video Animation (3 muaj)",
    ],
    text: "Te rrite mirë menjeher permespermbajtjet qe ndihmojne identitet vizual dhe zhvillojne aftësitë komunikuese.",
  },
  {
    title: "Viti 2: Programim dhe Menaxhimi Projektesh",
    items: [
      "Web Development (6 muaj)",
      "Mobile App Development (3 muaj)",
      "Project Management (3 muaj)",
    ],
    text: "Fokusohet në zhvillim të aplikacioneve dhe mënyrat moderne të menaxhimit.",
  },
  {
    title: "Viti 3: Teknologjii të avancuara dhe aftësi menaxheriale",
    items: [
      "Cyber Security (6 muaj)",
      "Data Science (3 muaj)",
      "Sales (1 muaj)",
      "Finance Management (1 muaj)",
      "Human Resources (1 muaj)",
    ],
    text: "Krijon aftësi të avancuara dhe menaxhimi i burimeve për një ekip.",
  },
  {
    title: "Orari dhe praktika",
    items: [
      "Trajnimi zhvillohet 2 herë në javë",
      "Praktikat ofrohen 3 herë në javë",
    ],
    text: "ROi Academy ofron një integrim të plote me rrugëtimin studentor.",
  },
];


// ---------------------------
// CARD COMPONENT
// ---------------------------
const Card = ({ title, items, text }) => (
  <div className="card">
    <h3>{title}</h3>
    <ul>
      {items.map((it, idx) => (
        <li key={idx}>{it}</li>
      ))}
    </ul>
    {text && <p className="card-text">{text}</p>}
  </div>
);


// ---------------------------
// SECTION COMPONENT
// ---------------------------
export default function SectionOfProgram() {
  return (
    <section className="cards-container">
      {cardsData.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </section>
  );
}
