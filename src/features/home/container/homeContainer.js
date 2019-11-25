import React from "react";
import ThreeItemsCard from "../components/threeItemsCard";
import TwoItemsCard from "../components/twoItemsCard";
import FourItemsCard from "../components/fourItemsCard";
import Header from "../../app/header";
import Footer from "../../app/footer";
import MiddleCarousel from "../components/middleCarousel";

import Photo1 from "../../../assets/images/background/all/1.jpg";
import Photo2 from "../../../assets/images/background/all/2.jpg";
import Photo3 from "../../../assets/images/background/all/3.jpg";
import ScrollDown from "../../../tools/scrollDown";
import BG1 from "../../../assets/images/background/all/nikegreen.jpg";
import withMedia from "react-media-query-hoc/dist/with-media";

const HomeContainer = props => {
  const { media } = props;
  return (
      <div>
        <Header Background={BG1} />
        {media.desktop || media.largeDesktop ? <ScrollDown />:null}
        <div className="container">
          <ThreeItemsCard />
          <div className="row">
            <TwoItemsCard Images={Allstars} />
            <TwoItemsCard Images={Vans} />
          </div>
          <FourItemsCard />
        </div>
        <MiddleCarousel Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} />
        <Footer />
      </div>
  );
};

export default withMedia(HomeContainer);

const Allstars = [
  "images/shoes/men/allstars/as3.jpg",
  "images/shoes/men/allstars/as2.jpg",
  "images/shoes/men/allstars/as1.jpg",
  "images/shoes/men/allstars/as4.jpg"
];

const Vans = [
  "images/shoes/men/vans/van4.jpg",
  "images/shoes/men/vans/van2.jpg",
  "images/shoes/men/vans/van3.jpg",
  "images/shoes/men/vans/van1.jpg"
];
