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

const HomeContainer = props => {
  return (
    <div id="outer-container" style={{ height: "100%" }}>
      <div id="page-wrap">
        <Header />
        <ScrollDown/>
        <div className="container">
          <ThreeItemsCard />
          <TwoItemsCard />
          <FourItemsCard />
        </div>
        <MiddleCarousel Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} />
        <Footer />
      </div>
    </div>
  );
};

export default HomeContainer;
