import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Item from "../components/item";
import Arrow from "../assets/Arrow.png";
import Bellevue from "../assets/Bellevue.jpg";
import BrockStreet from "../assets/Brock.jpg";
import Fremont from "../assets/fremont.jpg";
import Gurgaon from "../assets/Gurgaon.jpg";
import KingsCross from "../assets/Kings-Cross.jpg";
import Singapore from "../assets/singapore.jpg";
import ProjectReThink from "../assets/Project-Rethink.jpg";



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
    name: "Bellevue Block 20",
    image: Bellevue,
    alt: "inside Bellevue Block 20 Office",
  },
  {
    id: 2,
    name: "Brock Street",
    image: BrockStreet,
    alt: "inside Brock Street Office",
  },
];

const CardImagesRowTwo = [
  {
    id: 1,
    name: "Fremont",
    image: Fremont,
    alt: "inside Fremont Office",
  },
  {
    id: 2,
    name: "Gurgaon",
    image: Gurgaon,
    alt: "inside Gurgaon Office",
  },
];

const CardImagesRowThree = [
  {
    id: 1,
    name: "KingsCross",
    image: KingsCross,
    alt: "inside KingsCross Office",
  },
  {
    id: 2,
    name: "Singapore",
    image: Singapore,
    alt: "inside Singapore Office",
  },
];

const CardImagesRowFour = [
  {
    id: 1,
    name: "Project Rethink",
    image: ProjectReThink,
    alt: "inside ProjectReThink Office",
  },
  {
    id: 2,
    name: "Singapore",
    image: Singapore,
    alt: "inside Singapore Office",
  },
];

const title = "Explore 360 virtual tours of Meta offices around the world";
const Herotext =
  "We’re committed to bringing you together with your coworkers in an exceptional workplace so you can focus on bringing the world closer together. We’re expanding access to Meta spaces so everyone in the community can tour every office under one roof.";
const itemTitle = "Meta offices virtual tours";

const metaOffices = () => {
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
          <div className="item-container">
            {CardImagesRowFour.map((CardImagesRowFour) => (
              <Item
                key={CardImagesRowFour.id}
                MainImages={MainImages}
                CardImages={CardImagesRowFour.image}
                ImageAlts={CardImagesRowFour.alt}
                ItemTitle={CardImagesRowFour.name}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default metaOffices;
