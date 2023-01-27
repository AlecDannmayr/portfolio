/** @format */

import React, { useState } from "react";
import Logo from "../images/Accesss-Autonomy-Logo.ico";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import {
  FaHome,
  FaChild,
  FaThLarge,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

const Nav = (props) => {
  const [showNav, setShowNav] = useState();

  const toggleTheme = (event) => {
    props.onChangeSwitch(event);
  };
  
  return (
    <>
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
          <Link to="/contacts">
            <FaPhone />
          </Link>
          <a href="https://github.com/AlecDannmayr" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alec-dannmayr-9bb265109/" target="_blank">
            <FaLinkedinIn />
          </a>
          <div className="switch">
            <ReactSwitch
              value={props.themeToggled}
              onChange={toggleTheme}
              checked={props.themeToggled === "dark"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
