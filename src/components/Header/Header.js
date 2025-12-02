import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
        <nav className="header__nav">
          <ul className="nav-top">
            <li>Programet 6–12 mujore ▾</li>

            <Link to="/programet-1-2-mujore">
              <li className="active">Programet 1–2 mujore</li>
            </Link>

            <li>Future Generations</li>
            <li>ROI Kids</li>
          </ul>
          <ul className="nav-bottom">
            <li>Rreth ROI Academy</li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <button className="apply-bttn">Apply Now</button>
      </div>
    </header>
  );
};

export default Header;
