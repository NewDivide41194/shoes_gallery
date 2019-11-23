import React from "react";
import { Fade } from "react-slideshow-image";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay:false
};

const TwoItemsCard = props => {
  const { Images } = props;
  return (
    <div className="slide-container col-lg-6 col-md-6 py-5">
      <Fade {...properties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={Images[0]} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={Images[1]} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={Images[2]} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={Images[3]} style={{ width: "100%" }} />
          </div>
        </div>
      </Fade>
      <span>Hello</span>
    </div>
  );
};

export default TwoItemsCard;

