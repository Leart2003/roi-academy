import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

library.add(fas, far, fab);

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-container">
        <div className="contact">
          <div className="roi-logo">
            <img
              src="/assets/images/roi-academy-logo-e1750817553650.png"
              alt="ROI Logo"
              width="100"
            />
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <span>+383 48 180 194</span>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <span>+355 68 500 0125</span>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <span>+389 78 243 666</span>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <span>info@roiacademy.net</span>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <span>Icon Tower, Tirana, Prishtina 10000</span>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <span>Zogu I Blvd, Tiranë 1001, Albania</span>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <span>Str Macedonia, Skopje 1000, N. Macedonia</span>
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <span>33 City & Central, Marylebone Lane, England</span>
            </li>
          </ul>
        </div>
        <div className="programs">
          <h4>Programet</h4>
          <Link to="/Programet-6-mujore">
            <span>- 6 muaj</span>
          </Link>
          <Link to="/programet-1-2-mujore">
            <span>- 1-2 muaj</span>
          </Link>
          <Link to="/Future-generation">
            <span>- Future Generations</span>
          </Link>
          <Link to="/Roi-Kids">
            <span>- ROI Kids</span>
          </Link>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <Link to="/">
            <span>- Ballina</span>
          </Link>
          <Link to="/Programet-6-mujore">
            <span>- Programet</span>
          </Link>
          <Link to="/Rreth-Roit">
            <span>- Rreth ROI Academy</span>
          </Link>
          <Link to="/">
            <span>- Ekipi</span>
          </Link>
          <Link to="/blogs/1">
            <span>- Blogu</span>
          </Link>
        </div>
        <div className="subscribe">
          <h4>Subscribe</h4>
          <form>
            <input className="input-style" placeholder="Email"></input>
            <button className="submit-button">SUBMIT</button>
          </form>
          <h4 className="h4-style">
            ROI Academy is <br /> part of:
          </h4>
          <img
            className="roi-holding"
            src="/assets/images/ROI-LOGO_6-Maj_Final-22-768x339.png"
            alt="ROI Holding Logo"
            width="100"
          />
          <nav className="btn-nav">
            <button
              className="small-btn"
              style={{ backgroundColor: "#3b5998" }}
            >
              <a href="https://www.facebook.com/roiacademy1" target="_blank">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  style={{ color: "#ffffff" }}
                />
              </a>
            </button>
            <button
              className="small-btn"
              style={{ backgroundColor: "#262626" }}
            >
              <a href="https://www.instagram.com/roiacademy/" target="_blank">
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram"
                  style={{ color: "#ffffff" }}
                />
              </a>
            </button>
            <button
              className="small-btn"
              style={{ backgroundColor: "#0077b5" }}
            >
              <a
                href="https://www.linkedin.com/company/roi-academy/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-linkedin"
                  style={{ color: "#ffffff" }}
                />
              </a>
            </button>
            <button
              className="small-btn"
              style={{ backgroundColor: "#000000" }}
            >
              <a href="https://x.com/academy_ro84355" target="_blank">
                <FontAwesomeIcon
                  icon="fa-brands fa-x-twitter"
                  style={{ color: "#ffffff" }}
                />
              </a>
            </button>
          </nav>
        </div>
      </div>
      <div className="copyrights">
        <p>
          © Copyrights <strong>ROI Academy</strong>. All rights reserved. –
          Developed by <strong>Sharp Group</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
