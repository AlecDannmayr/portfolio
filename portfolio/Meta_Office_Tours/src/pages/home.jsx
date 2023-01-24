import React from "react";
import { HashLink } from "react-router-hash-link";
import Header from "../components/header";
import Footer from "../components/footer";
import Item from "../components/item";
import Arrow from "../assets/Arrow.png";
import Gurgaon from "../assets/Gurgaon.png";
import MpkMiniSquare from "../assets/mpk-mini-square.jpg";
import Sunnyvale from "../assets/sunnyvale.jpg";
import Willow from "../assets/willows.jpg";

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
    name: "Meta Offices",
    image: MpkMiniSquare,
    alt: "Mpk Mini Square",
  },
  {
    id: 2,
    name: "Reality Labs",
    image: Sunnyvale,
    alt: "Reality Labs",
  },
];

const CardImagesRowTwo = [
  {
    id: 3,
    name: "Workplace Design",
    image: Willow,
    alt: "Willow",
  },
];
const title = "Explore 360 virtual tours of Meta around the world";
const titleLink = "View All Virtual Tours";
const ColumnOneTitle = "All Meta offices under one roof";
const ColumnOneParagraph =
  "What started 9 years ago with 1 meeting room, 1 person and almost 200 meetings has evolved into 6 Global Partner Centers in Chennai, MPK, NY, Singapore, London and Dublin. Partner Centers provide beautiful meeting venues where clients and partners can come to learn more about our culture, mission and products.";
const itemTitle = "Virtual Tours";

const home = () => {
  return (
    <div className="container">
      <Header />
      <div className="divider"></div>
      <div className="banner">
        <div className="banner-text-container">
          <p>{title}</p>
        </div>
          <HashLink to="#alltours" scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>
            <div className="arrow-container">
              <img src={Arrow} alt={MainImages[0].alt} />
              <p className="banner-text-second">{titleLink}</p>
            </div>
          </HashLink>
      </div>
      <div className="body-container">
        <div className="inner-section">
          <p className="inner-section_pragaraph-one">{ColumnOneTitle}</p>
          <p className="inner-section_pragaraph-two">{ColumnOneParagraph}</p>
        </div>
        <div className="inner-section">
          <img src={MainImages[1].image} alt={MainImages[1].alt} />
        </div>
      </div>
      <div className="main-body-container">
        <div className="inner-body-container">
          <h1 id="alltours">{itemTitle}</h1>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
