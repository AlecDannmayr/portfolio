import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ThemeChanged = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  p {
    text-align: center;
  }
`;

const ThemeChange = (props) => {
  const [isDark, setIsDark] = useState("Light");

  const handleThemeChange = () => {
    if (isDark === "Light") {
      setIsDark("Dark");
    } else {
      setIsDark("Light");
    }
  }

  useEffect(() => {
    props.change(isDark);
   
  });

  return (
    <ThemeChanged>
      <button onClick={handleThemeChange} value={isDark}>
 Switch
      </button>
    </ThemeChanged>
  );
};

export default ThemeChange;
