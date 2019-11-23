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
    <div id="outer-container" style={{ height: "100%" }}>
      <div id="page-wrap">
        <Header Background={BG1} />
        {media.desktop ? <ScrollDown /> : null}
        <div className="container">
          <ThreeItemsCard />
          <div className="row">
            <TwoItemsCard Images={Nike} />
            <TwoItemsCard Images={Nike} />
          </div>

          <FourItemsCard />
        </div>
        <MiddleCarousel Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} />
        <Footer />
      </div>
    </div>
  );
};

export default withMedia(HomeContainer);

const Nike = [
  "images/shoes/men/nike/nk4.jpg",
  "images/shoes/men/nike/nk2.jpg",
  "images/shoes/men/nike/nk3.jpg",
  "images/shoes/men/nike/nk1.jpg"
];

const Vans = [
  "images/shoes/men/vans/van1.jpeg",
  "images/shoes/men/vans/van1.jpeg",
  "images/shoes/men/vans/van1.jpeg",
  "images/shoes/men/vans/van1.jpeg"
];
