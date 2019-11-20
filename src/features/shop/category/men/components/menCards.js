import React, { useState } from "react";
import {withMedia} from 'react-media-query-hoc'

import ThumbButton from "../../../../app/thumbButton";
import * as Fonts from "../../../../../config/fontConfig";
import { fsc } from "../../../../../assets/fontControlHelper";

const MenItemCards = props => {
  const { media } = props;
  const [LargeView, setLargeView] = useState(false);
  const [SmallView, setSmallView] = useState(true);

  const _handleLargeView = () => {
    setLargeView(true);
    setSmallView(false);
  };
  const _handleSmallView = () => {
    setSmallView(true);
    setLargeView(false);
  };
  return (
    <div className="d-flex flex-row flex-wrap py-5 px-2">
      <span
        style={{ fontFamily: Fonts.textThin, fontSize: fsc(media, 35) }}
        className="pl-3 w-100"
      >
        Our Latest Styles for Men :
      </span>

     {media.mobile|| <ThumbButton
        FunctionSmall={_handleSmallView}
        FunctionLarge={_handleLargeView}
      />}
      {ForMenData.map((v, k) => (
        <div
          className={`${
            LargeView ? "col-lg-6 col-sm-6" : SmallView ? "col-lg-4 col-sm-4" : null
          } p-3`}
          style={{ transition: ".8s" }}
          key={k}
        >
          <div className="border">
            <img
              src={process.env.PUBLIC_URL + v.imgURL}
              className="card-img-top"
              alt="..."
            />
            <div className="px-3">
              <h5 className="">{v.name}</h5>
              <p className="">Color : {v.color}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withMedia(MenItemCards);

const ForMenData = [
  {
    id: 1,
    name: "Nike",
    color: "Black",
    price: 180,
    sizes: {
      size1: "EU 39",
      size2: "EU 40",
      size3: "EU 41",
      size4: "EU 42",
      size5: "EU 43",
      size6: "EU 44",
      size7: "EU 45",
      size8: "EU 46"
    },
    imgURL: "images/shoes/men/nike/nk1.jpg"
  },
  {
    id: 2,
    name: "Nike",
    color: "Black",
    price: 180,
    sizes: {
      size1: "EU 39",
      size2: "EU 40",
      size3: "EU 41",
      size4: "EU 42",
      size5: "EU 43",
      size6: "EU 44",
      size7: "EU 45",
      size8: "EU 46"
    },
    imgURL: "images/shoes/men/nike/nk2.jpg"
  },
  {
    id: 3,
    name: "Nike",
    color: "Blue",
    price: 180,
    sizes: {
      size1: "EU 39",
      size2: "EU 40",
      size3: "EU 41",
      size4: "EU 42",
      size5: "EU 43",
      size6: "EU 44",
      size7: "EU 45",
      size8: "EU 46"
    },
    imgURL: "images/shoes/men/nike/nk4.jpg"
  },
  {
    id: 3,
    name: "Nike",
    color: "Blue",
    price: 180,
    sizes: {
      size1: "EU 39",
      size2: "EU 40",
      size3: "EU 41",
      size4: "EU 42",
      size5: "EU 43",
      size6: "EU 44",
      size7: "EU 45",
      size8: "EU 46"
    },
    imgURL: "images/shoes/men/timberland/tbl1.jpg"
  },
  {
    id: 3,
    name: "Nike",
    color: "Blue",
    price: 180,
    sizes: {
      size1: "EU 39",
      size2: "EU 40",
      size3: "EU 41",
      size4: "EU 42",
      size5: "EU 43",
      size6: "EU 44",
      size7: "EU 45",
      size8: "EU 46"
    },
    imgURL: "images/shoes/men/timberland/tbl2.jpg"
  },
  {
    id: 3,
    name: "Nike",
    color: "Blue",
    price: 180,
    sizes: {
      size1: "EU 39",
      size2: "EU 40",
      size3: "EU 41",
      size4: "EU 42",
      size5: "EU 43",
      size6: "EU 44",
      size7: "EU 45",
      size8: "EU 46"
    },
    imgURL: "images/shoes/men/timberland/tbl3.jpg"
  }
];
