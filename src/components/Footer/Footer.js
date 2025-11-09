import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
const Footer = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="logo">
          <img
            src="/roi-academy-logo-e1750817553650.png"
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
        <a> - 6 muaj</a>
        <a> - 1-2 muaj</a>
        <a> - Future Generations</a>
        <a> - ROI Kids</a>
      </div>
      <div className="quick-links">
        <h4>Quick Links</h4>
        <a>- Ballina</a>
        <a>- Programet</a>
        <a>- Rreth ROI Academy</a>
        <a>- Ekipi</a>
        <a>- Blogu</a>
      </div>
      <div className="subscribe">
        <h4>Subscribe</h4>
        <form>
          <input placeholder="Email"></input>
          <button className="button"></button>
        </form>
      </div>
    </div>
  );
  <div className="copyrights"></div>;
};

export default Footer;
