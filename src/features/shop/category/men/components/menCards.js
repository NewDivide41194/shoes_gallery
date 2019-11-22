import React, { useState } from "react";
import { withMedia } from "react-media-query-hoc";

import ThumbButton from "../../../../app/thumbButton";
import * as Fonts from "../../../../../config/fontConfig";
import { fsc } from "../../../../../assets/fontControlHelper";

const MenItemCards = props => {
  const { media } = props;
  const [LargeView, setLargeView] = useState(false);
  const [SmallView, setSmallView] = useState(true);

  const [hover, setHover] = useState(false);

  const _handleHover = e => {
    setHover(!hover);
    if (hover === true) {
      document.getElementById(e.target.id).style.transform = "scale(.9)";
    } else {
      document.getElementById(e.target.id).style.transform = "scale(1)";
    }
  };

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

      {media.mobile || (
        <ThumbButton
          FunctionSmall={_handleSmallView}
          FunctionLarge={_handleLargeView}
        />
      )}
      {ForMenData.map((v, k) => (
        <div
          className={`${
            LargeView ? "col-lg-6 col-sm-6" : "col-lg-4 col-sm-4"
          } p-3`}
          style={{ transition: ".5s" }}
          key={k}
        >
          <div className="border-bottom pb-3">
            <div style={{overflow:'hidden'}}>
              <img
              src={process.env.PUBLIC_URL + v.imgURL}
              id={v.id}
              className="card-img-top"
              onMouseOver={_handleHover}
              onMouseLeave={_handleHover}
              style={{transition:'1s',transform:'scale(.9)'}}
              alt="..."
            />
            </div>
            
            <div className="px-3 pt-3 border-top">
              <h4 className="">{v.name}</h4>
              <h5 className="">{v.model}</h5>

              <table>
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>:</td>
                    <td>
                      <i>{v.color}</i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>:</td>
                    <td>
                      <b>{v.price}</b> <i>MMK</i>
                    </td>
                  </tr>
                </tbody>
              </table>
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
    model: "Black Sport",
    color: "Black",
    price: 280000,
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
    model: "Black Sport",
    color: "Black",
    price: 280000,
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
    model: "Black Sport",
    color: "Blue",
    price: 280000,
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
    id: 4,
    name: "Timber Land",
    model: "Black Sport",
    color: "Blue",
    price: 280000,
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
    id: 5,
    name: "Timber Land",
    model: "Black Sport",
    color: "Blue",
    price: 280000,
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
    id: 6,
    name: "Timber Land",
    model: "Black Sport",
    color: "Blue",
    price: 280000,
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
