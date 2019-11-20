import React from "react";
import ThreeItemsCard from "../components/threeItemsCard";
import TwoItemsCard from "../components/twoItemsCard";
import FourItemsCard from "../components/fourItemsCard";
import Header from "../../app/header";
import Footer from "../../app/footer";
import MiddleCarousel from '../components/middleCarousel'

const HomeContainer = props => {
  return (
    <div id="outer-container" style={{height: '100%'}}>
      <div id="page-wrap">
      <Header />
      <div className="container">
        <ThreeItemsCard />
        <TwoItemsCard />
        <FourItemsCard />
      </div>
      <MiddleCarousel/>

      <Footer/>
    </div>
    </div>
    
  );
};

export default HomeContainer;
