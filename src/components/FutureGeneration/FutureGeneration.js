import Loginform from "../Loginform/Loginform";
import "./FutureGeneration.css";

const FutureGeneration = () => {
  return (
    <div className="future-generation">
      <Loginform
        title="Future Generation Akademia 3-Vjeçare e ROI Academy"
        button={<button className="apply-btn">Apliko Tani</button>}
      />
    </div>
  );
};

export default FutureGeneration;
