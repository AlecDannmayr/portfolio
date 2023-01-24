import React, { useState, useEffect } from "react";
import "../css/burgerMenu.css";

const BurgerMenu = (props) => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (e) => {
  setIsShown(false)
  };
  useEffect(() => {
    props.menuToggled(isShown);
  }, [isShown]);

  return (
    <button className="center" onClick={handleClick}>
      <div></div>
    </button>
  );
};

export default BurgerMenu;
