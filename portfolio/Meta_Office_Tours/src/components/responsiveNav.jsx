import React from "react";
import { Link } from "react-router-dom";
import "../css/responsiveMenu.css"
import MetaLogo from "../assets/Meta_Logo.svg"

const responsiveNav = () => {
  return (
    <nav>
      <section className="top-nav">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <div>
            <li><Link to="/">Home</Link></li>
          </div>
          <div>
            <li><Link to="/meta_offices">Meta offices</Link></li>
          </div>
          <div>
            <li><Link to="/Reality_Labs">Reality Labs</Link></li>
          </div>
          <div>
            <li><Link to="/Workplace_design">Workplace design</Link></li>
          </div>
        </ul>
        <div className="logo-container">
          <img src={MetaLogo} alt="Meta Logo" />
        </div>
        <div></div>
      </section>
    </nav>
  );
};


export default responsiveNav;
