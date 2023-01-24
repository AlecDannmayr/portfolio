import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Item from "../components/item";
import Arrow from "../assets/Arrow.png";
import Gurgaon from "../assets/Gurgaon.png";
import rlburlingame from "../assets/rlburlingame.jpg";
import SunnyVale from "../assets/sunnyvale.jpg";

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
    name: "Burlingame",
    image: rlburlingame,
    alt: "Inside Burlingame Offices",
  },
  {
    id: 2,
    name: "Sunnyvale",
    image: SunnyVale,
    alt: "Inside Sunnyvale Offices",
  },
];


const title = "Explore 360 virtual tours of reality labs around the world";
const Herotext =
  "At Reality labs, we build the tools that help people feel connected anytime, anywhere. At Meta,we know architecture can stimulate productivity and it was our unique culture that guided the design of our office spaces. Now with Office 360 tours, we’re striving to architect that vibrant culture and productivity in the digital realm.";
  const itemTitle = "Meta reality labs virtual tours";

const realityLabs = () => {
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

export default realityLabs;
