import React from "react";
import { Fade } from "react-slideshow-image";

const slideImages = [
  "images/shoes/men/nike/nk2.jpg",
  "images/shoes/men/timberland/tbl1.jpg"
];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const TwoItemsCard = props => {
  return (
    <div className="slide-container d-flex flex-row flex-wrap py-5">
      <Fade {...properties}>
        {TwoItemsData.map((v, k) => (
          <div className="image-container" style={{ width: 500 }}>
            <img src={v.imgURL} style={{ width: "100%" }} />
            <p>{v.name}</p>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default TwoItemsCard;

const TwoItemsData = [
  {
    id: 1,
    name: "Nike Sport",
    imgURL: "images/shoes/men/nike/nk2.jpg"
  },
  {
    id: 2,
    name: "Nike Sport",
    imgURL: "images/shoes/men/timberland/tbl1.jpg"
  }
];
