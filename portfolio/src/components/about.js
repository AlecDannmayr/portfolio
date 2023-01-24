/** @format */

import React, { useState, useEffect } from "react";
import "../css/style.css";
import Alec from "../images/Alec.jpeg";

function About() {
  return (
    <>
      <div>
        <div className="services">
          <div>
            <img src={Alec}></img>
            <p>
              I’m Alec a highly motivated and enthusiastic individual with
              creative technical skills and the ability to apply a robust agile
              methodology to enhance a user's experience of online products. I'm
              always looking to commit to new, exciting and engaging projects.
              <br />
              <br />
              I've spent several years designing and developing, web
              applications, GUIs (Graphical user interfaces), websites and
              graphics.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
