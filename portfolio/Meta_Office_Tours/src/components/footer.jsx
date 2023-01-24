import React from "react";
import styled from "styled-components";
import "../css/media_Queries.css";

const Footer = styled.section`
  margin: 80px 8.33% 0px 8.33%;
  height: 68px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 100;
`;

const footer = () => {
  return (
    <Footer>
      <p>
        <b>© 2022 Meta</b>
      </p>
    </Footer>
  );
};

export default footer;
