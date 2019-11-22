import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const MiddleCarousel = props => {
  const {Photo1,Photo2,Photo3}=props
  return (
    <div className='pb-4'>
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
    </div>
    
  );
};

export default MiddleCarousel;
