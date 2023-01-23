/** @format */

import React, { useState, useEffect } from "react";
import "../css/style.css";
import Alec from "../images/Alec.jpg";

function About() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <div
          className="services"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        >
          <div>
            <img src={Alec}></img>
            <p>
              Welcome to the website of Alec Dannmayr, a skilled web application
              designer and developer. Alec specializes in working with both
              startup and enterprise companies, building internal and
              customer-facing web applications using the latest technologies
              such as React, Typescript, Node.js, and Javascript. He has a
              proven track record of creating effective and user-friendly web
              solutions that drive business growth. Explore the site to learn
              more about Alec's services and portfolio, and feel free to contact
              him for any web development needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
