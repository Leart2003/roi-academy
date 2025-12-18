import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return <></>;

  return (
    <button
      className="scroll-up-button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FontAwesomeIcon icon="fa fa-angle-up" size="2xl" />
    </button>
  );
}

export default ScrollUpButton;
