import './StatCard.css';
const StatCard = () => {
  return (
    <div className="stats">
      {data.map((it, idx) => (
        <div key={idx} className="stat">
          <span className="value">{it.value}</span>
          <span className="label">{it.label}</span>
        </div>
      ))}
    </div>
  );
};

// Përdorimi
const data = [
  { value: '+6000', label: 'Studente të trajnuar' },
  { value: '95%', label: 'Studente të përshkunuar' },
  { value: '42', label: 'Trajnime të përmendur' },
  { value: '6', label: 'Vite nga themelimi' },
  { value: '3', label: 'Shtete me prezencë fizike' }
];







export default  StatCard;


 



