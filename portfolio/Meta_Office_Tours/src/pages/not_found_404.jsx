import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Header from "../components/header";
import Footer from "../components/footer";
import Link404 from "../assets/404_link.svg"

const title =
"This page isn't available";
const HeroText =
"The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct."

const BackLink = styled.div`
max-width: 783px;
font-size: 24px;
font-weight: 200;
color: rgb(56, 88, 152);
margin: 80px 0 80px 0;
`

const TitleDivider = styled.div`
margin 8px 0 8px 0;
`

const notFound404 = () => {
  return (
    <div className="container">
      <Header />
      <div className="divider"></div>
      <div className="banner">
        <div className="banner-text-container">
          <img src={Link404} alt="404 link Icon" />
          <TitleDivider>{title}</TitleDivider>
        </div>
      </div>
      <div className="banner">
        <div className="banner-text-container">
        <p style={{fontSize: "22px", color: "#465A69"}}>{HeroText}</p>
          <BackLink><p><Link to="/">Go Back</Link></p></BackLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default notFound404;
