import React from "react";



const item = (props) => {
  const staticImages = props.MainImages[0];
  return (
    <div className="item">
      <img src={props.CardImages} alt={props.ImageAlts} />
      <div className="item-inner-flex">
        <div>
          <h1>{props.ItemTitle}</h1>
        </div>
        <div className="item-link">
          <a href="https://metaoffice360.com/partnercenter/mpk/index.htm">
            <img src={staticImages.image} alt={staticImages.alt} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default item;
