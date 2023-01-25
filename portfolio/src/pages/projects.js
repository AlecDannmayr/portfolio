/** @format */

import React from "react";
import { useState, useEffect } from "react";
import "../css/style.css";
import ProjectImgTwo from "../project-images/image-two.png";
import ProjectImgSix from "../project-images/image-six.png";
import ProjectImgThree from "../project-images/image-three.png";
import ProjectImgFour from "../project-images/image-four.png";
import ProjectImgFive from "../project-images/image-five.png";
import ProjectImgSeven from "../project-images/image-seven.png";
import ProjectImgEight from "../project-images/image-eight.png";
import ProjectImgNine from "../project-images/image-nine.png";
import ProjectImgTen from "../project-images/image-ten.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Meta from "../project-images/Meta_Office_Tours.png"

const imageContainer = {
  height: "100vh",
  overflow: "auto",
  marginLeft: "90px",
  marginTop: "0px",
};

const images = [
  {
    img: ProjectImgSix,
    title: "ARCHITECTURE SIMPLIFIED",
    tag: "Build",
    link: "https://arch-simplified.com/"

  },
  {
    img: ProjectImgTwo,
    title: "Cricket Scoreboard",
    tag: "Build",
    link: "https://www.linkedin.com/pulse/cricket-scoreboard-design-develop-engagestation-uk-ltd%3FtrackingId=8qTNwXUGT7GGsjUgh3tJUg%253D%253D/?trackingId=8qTNwXUGT7GGsjUgh3tJUg%3D%3D"
  },
  {
    img: ProjectImgThree,
    title: "Betting Platform",
    tag: "UX/UI",
    link: "https://www.linkedin.com/pulse/indibet-portal-design-develop-engagestation-uk-ltd%3FtrackingId=brYqrRWjSn2aPdH7k5LAJA%253D%253D/?trackingId=brYqrRWjSn2aPdH7k5LAJA%3D%3D"

  },
  {
    img: ProjectImgEight,
    title: "SocialWorks",
    tag: "UX/UI",
    link: "https://www.linkedin.com/pulse/less-more-engagestation-uk-ltd%3FtrackingId=oq8ILtyvTju3XtrgvN5NQw%253D%253D/?trackingId=oq8ILtyvTju3XtrgvN5NQw%3D%3D"

  },
  {
    img: ProjectImgNine,
    title: "VisualSkies",
    tag: "Build",
    link: "https://visualskies.com/"

  },
  {
    img: ProjectImgFive,
    title: "SalesImpact.io",
    tag: "Build",
    link: "https://www.salesimpact.io/home/"

  },
  {
    img: Meta,
    title: "Meta Office Tours",
    tag: "UX/UI",
    link: "src/build/index.html"
  },
  {
    img: ProjectImgTen,
    title: "VisitBritian",
    tag: "UX/UI",
    link: "https://www.visitbritain.org/"

  },
  {
    img: ProjectImgSeven,
    title: "DecimalCricket",
    tag: "UX/UI",
    link: ""
  },

];

export default function StandardImageList() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((images) => images.tag === tag));
  }, [tag]);
  const TagButton = ({ name, handleSetTag }) => {
    return (
      <button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>
    );
  };
  return (
    <div>
      <div>
        
        <ImageList cols={1} gap={0} className="imageContainer">
          {filteredImages.map((item) => (
            <ImageListItem key={item.img} >
              <img
                id="imageContainer"
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
              />
              <div className="titleContainer">
              <a href={`${item.link}`} target="_blank">
                <p id="show">{item.title}</p>
                </a>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
