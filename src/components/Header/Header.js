import React from "react"
import "./Header.css"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()

  const handleApplyClick = () => {
    navigate("/application")
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
        <nav className="header__nav">
          <ul className="nav-top">
            <div className="dropdown">
              <li>
                <Link to={"/Programet-6-mujore"} className="active">
                  Programet 6–12 mujore ▾
                </Link>
                <div className="dropdown-content">
                  <span className="anchor">Të gjitha programet</span>
                  <span className="anchor">Trajnim për programim</span>
                  <span className="anchor">Trajnim për Digjital Marketing</span>
                  <span className="anchor">Trajnim për Siguri Kibernetike</span>
                </div>
              </li>
            </div>

            <li className="active">
              <Link to="/programet-1-2-mujore">Programet 1–2 mujore</Link>
            </li>

            <li>Future Generations</li>
            <Link to={"/Roi-Kids"}>
              {" "}
              <li>ROI Kids</li>
            </Link>
          </ul>

          <ul className="nav-bottom">
            <li>Rreth ROI Academy</li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <button className="apply-bttn" onClick={handleApplyClick}>
          Apply Now
        </button>
      </div>
    </header>
  )
}

export default Header
