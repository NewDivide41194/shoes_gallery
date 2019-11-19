import React from "react";
import ThreeItemsCard from "../components/threeItemsCard";
import TwoItemsCard from "../components/twoItemsCard";
import FourItemsCard from "../components/fourItemsCard";
import Header from "../../app/header";

const HomeContainer = props => {
  return (
    <div>
      <Header />

      <div className="container">
        <ThreeItemsCard />
        <TwoItemsCard />
        <FourItemsCard />
      </div>
    </div>
  );
};

export default HomeContainer;
