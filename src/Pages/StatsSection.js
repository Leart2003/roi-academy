import "./Programs12Page.css";

const StatsSection = ({ isDark }) => {
  const statBoxClassName = isDark ? "stat-box-dark" : "stat-box";
  return (
    <div className={isDark ? "stats-section-dark" : "stats-section"}>
      <div className={statBoxClassName}>
        <h2>+6000</h2>
        <p>Studentë të trajnuar</p>
      </div>

      <div className={statBoxClassName}>
        <h2>95%</h2>
        <p>Studentë të punësuar</p>
      </div>

      <div className={statBoxClassName}>
        <h2>42</h2>
        <p>Trajnerë të punësuar</p>
      </div>

      <div className={statBoxClassName}>
        <h2>6</h2>
        <p>Vite nga themelimi</p>
      </div>

      <div className={statBoxClassName}>
        <h2>3</h2>
        <p>Shtete me prezencë fizike</p>
      </div>
    </div>
  );
};

export default StatsSection;
