/** @format */

import React, {useState, useEffect} from "react";
import Logo from "../images/Accesss-Autonomy-Logo.ico";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import {
  FaHome,
  FaChild,
  FaThLarge,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Nav = (props) => {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

  return (
    <div className="nav-main">
      <div id={"nav-main-logo"}>
        <img src={Logo} alt="AccessAutonomy Logo"></img>
      </div>
      <div id={"nav-main-list"}>
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/about">
          <FaChild />
        </Link>
        <Link to="/projects">
          <FaThLarge />
        </Link>
        <Link to="/blog">
          <FaGithub />
        </Link>
        <Link to="/contacts">
          <FaLinkedinIn />
        </Link>
              <div className="switch">
        <ReactSwitch
          value={theme}
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </div>
      </div>
    </div>
  );
};

export default Nav;
