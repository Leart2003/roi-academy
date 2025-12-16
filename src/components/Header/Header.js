import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/application");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    console.log("Clicked", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="header">
      <div className="header__left">
        <Link to={"/"}>
          <img
            src="assets/images/roi-academy-logo-e1750817553650.png"
            alt="ROI Academy logo"
            className="logo"
          />
        </Link>
      </div>
        <div className="header__center">
          <nav className={`header__nav ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className={isMobileMenuOpen ? "active" : ""}>
              <li>
              <div className="dropdown">
                
                  <Link to={"/Programet-6-mujore"} className="active">
                    Programet 6-12 mujore ▾
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/Programet-6-mujore" className="active">
                      <span className="anchor">Të gjitha programet</span>
                    </Link>
                    <Link to="/training-programming" className="active">
                      <span className="anchor">Trajnim për programim</span>
                    </Link>
                    <Link to="/digital-marketing" className="active">
                      <span className="anchor">
                        Trajnim për Digital Marketing
                      </span>
                    </Link>
                    <Link to={"/CyberSecurity"}>
                      <span className="anchor">
                        Trajnim për Siguri Kibernetike
                      </span>
                    </Link>
                  </div>
              </div>
                </li>

              <li className="active">
                <Link to="/programet-1-2-mujore">Programet 1–2 mujore</Link>
              </li>
  <li>
              <Link to="/Future-generation">
                Future Generations
              </Link>
              </li>
              <li>
              <Link to={"/Roi-Kids"}>
                ROI Kids
              </Link>
              </li>
              <li>
              <Link to={"/Rreth-Roit"}>
                Rreth ROI Academy
              </Link>
              </li>
              <li className="apply-btn-mobile">
                <button className="apply-bttn" onClick={handleApplyClick}>
                  Apply Now
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__right">
          <button className="apply-bttn" onClick={handleApplyClick}>
            Apply Now
          </button>
        </div>
      <div className="header__mobile__icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon="fa-solid fa-bars" className="mobile-icon"/>        
      </div>
    </header>
  );
};

export default Header;
