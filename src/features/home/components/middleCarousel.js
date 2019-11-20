import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Photo1 from "../../../assets/images/background/all/1.jpg";
import Photo2 from "../../../assets/images/background/all/2.jpg";
import Photo3 from "../../../assets/images/background/all/3.jpg";

const MiddleCarousel = () => {
  return (
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        interval={3000}
        transitionTime={850}
        infiniteLoop={true}
        emulateTouch={true}
        dynamicHeight={false}
      >
        <div>
          <img src={Photo1}/>
        </div>
        <div>
          <img src={Photo2}/>
        </div>
        <div>
          <img src={Photo3}/>
        </div>
      </Carousel>
  );
};

export default MiddleCarousel;
