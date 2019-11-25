import React from "react";
import Carousel from "../../../../home/components/middleCarousel";

import ItemCards from '../components/items'
import Photo1 from "../../../../../assets/images/background/all/1.jpg";
import Photo2 from "../../../../../assets/images/background/all/2.jpg";
import Photo3 from "../../../../../assets/images/background/all/3.jpg";

const CollectionContainer = () => {
  return (
    <div>
      <Carousel Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} />
      <ItemCards/>
    </div>
  );
};

export default CollectionContainer;
