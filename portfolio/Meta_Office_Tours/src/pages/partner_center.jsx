import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Item from "../components/item";
import Arrow from "../assets/Arrow.png";
import Gurgaon from "../assets/Gurgaon.png";
import MenloPark from "../assets/mpk.jpg";
import NewYork from "../assets/nychy.jpg";
import GurgaonItem from "../assets/Gurgaon.jpg";
import London from "../assets/Kings-Cross.jpg";
import MarinaOne from "../assets/singapore.jpg";



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
    name: "Menlo Park",
    image: MenloPark,
    alt: "Inside Menlo Park Office",
  },
  {
    id: 2,
    name: "New York",
    image: NewYork,
    alt: "Inside New York Office",
  },
];

const CardImagesRowTwo = [
  {
    id: 3,
    name: "London",
    image: London,
    alt: "London Office",
  },
  {
    id: 4,
    name: "India",
    image: GurgaonItem,
    alt: "Inside India Office",
  },
];

const CardImagesRowThree = [
  {
    id: 4,
    name: "Marina One",
    image: MarinaOne,
    alt: "Inside Marina One Office",
  },
];


const title = "Explore 360 virtual tours of Meta offices around the world";
const itemTitle = "Virtual Tours";
const Herotext =
  "We're committed to bringing you together with your coworkers in an exceptional workplace so you can focus on bringing the world closer together. We're expanding access to Meta spaces so everyone in the community can tour every office under one roof.";

const partnerCenter = () => {
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
          <div className="item-container">
            {CardImagesRowTwo.map((CardImagesRowTwo) => (
              <Item
                key={CardImagesRowTwo.id}
                MainImages={MainImages}
                CardImages={CardImagesRowTwo.image}
                ImageAlts={CardImagesRowTwo.alt}
                ItemTitle={CardImagesRowTwo.name}
              />
            ))}
          </div>
          <div className="item-container">
            {CardImagesRowThree.map((CardImagesRowThree) => (
              <Item
                key={CardImagesRowThree.id}
                MainImages={MainImages}
                CardImages={CardImagesRowThree.image}
                ImageAlts={CardImagesRowThree.alt}
                ItemTitle={CardImagesRowThree.name}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default partnerCenter;
