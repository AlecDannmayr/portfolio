import React from "react";
import "../css/style.css";

const Copyright = (props) => {
  console.log(props.themeToggled);

  let fill;
  if (props.themeToggled === "light") {
    fill = "#202A44";
  } else {
    fill = "#d2c8b7";
  }

  console.log(fill);
  return (
    <div className={"copyright"}>
      <svg
        id={"wave"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={fill}
          d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <p id={"copyright-text"}>
        Copyright© {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;
