import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

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
            <div class="dropdown">
              <li className="">
                <Link to={"/Programs6"}>
                  <a className="active">Programet 6–12 mujore ▾</a>
                </Link>
                <div className="dropdown-content">
                  <span className="anchor">Të gjitha programet</span>
                  <span className="anchor">Trajnim për programim</span>
                  <span className="anchor">Trajnim për Digjital Marketing</span>
                  <span className="anchor">Trajnim për Siguri Kibernetike</span>
                </div>
              </li>
            </div>

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
  )
}

export default Header
