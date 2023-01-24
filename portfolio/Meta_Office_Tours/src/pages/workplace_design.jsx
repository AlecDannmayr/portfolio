import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Item from "../components/item";
import Arrow from "../assets/Arrow.png";
import Gurgaon from "../assets/Gurgaon.png";
import Austin from "../assets/Austin.jpg";
import Willows from "../assets/willows.jpg";

const MainImages = [
  {
    image: Arrow,
    alt: "click arrow to link",
  },
  {
    image: Gurgaon,
    alt: "Gurgaon Office Space",
  },
];


const CardImagesRowOne = [
  {
    id: 1,
    name: "Austin",
    image: Austin,
    alt: "Inside Austin Offices",
  },
  {
    id: 2,
    name: "Willows",
    image: Willows,
    alt: "Inside Willows Offices",
  },
];


const title = "Explore 360 virtual tours of Workplace design locations around the world";
const Herotext =
  "Dedicated to creating a transparent, functional, creative, and cost-effective environment to cultivate workplace productivity across Meta and Meta Partnerships.";
  const itemTitle = "Workplace design locations virtual tours";

const workPlaceDesign = () => {
  return (
    <div className="container">
      <Header />
      <div className="divider"></div>
      <div className="banner">
        <div className="banner-text-container">
          <p>{title}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="banner">
        <div className="banner-text-container">
          <p style={{fontSize: "22px", color: "#465A69"}}>{Herotext}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="main-body-container">
        <div className="inner-body-container">
          <h1>{itemTitle}</h1>
          <div className="item-container">
            {CardImagesRowOne.map((CardImagesRowOne) => (
              <Item
                key={CardImagesRowOne.id}
                MainImages={MainImages}
                CardImages={CardImagesRowOne.image}
                ImageAlts={CardImagesRowOne.alt}
                ItemTitle={CardImagesRowOne.name}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default workPlaceDesign;
