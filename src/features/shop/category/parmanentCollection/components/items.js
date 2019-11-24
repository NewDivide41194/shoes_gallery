import React, { useState, useEffect } from "react";
import { withMedia } from "react-media-query-hoc";
import JSDATA from "../../../../../assets/itemData.json"
import { Fade } from "react-slideshow-image";

import ThumbButton from "../../../../app/thumbButton";
import * as Fonts from "../../../../../config/fontConfig";
import { fsc } from "../../../../../assets/fontControlHelper";
import MyButton from "../../../../../tools/myButton.js";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay: false
};

const ItemCards = props => {
  const [item, setItem] = useState([]);
  const { media } = props;

  useEffect(() => {
    setItem(JSDATA);
  }, []);
  console.log(item);

  return (
    <div className="d-flex flex-row flex-wrap py-4 px-2">
      <span
        style={{ fontFamily: Fonts.textThin, fontSize: fsc(media, 35) }}
        className="pl-3 w-100"
      >
        Our Collection :
      </span>

      {item.map((v, k) => (
        <div
          className='col-lg-4 col-sm-6 p-3'
          style={{ transition: ".8s" }}
          key={k}
        >
          <div className="border-bottom pb-3">
            <Fade {...properties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={v.imgURL[0]} style={{ width: "100%" }} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={v.imgURL[1]} style={{ width: "100%" }} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={v.imgURL[2]} style={{ width: "100%" }} />
                </div>
              </div>
            </Fade>

            <div className="px-3 pt-3 border-top">
              <span style={{ fontSize: 20, fontWeight: "bold" }}>
                {v.brand}
              </span>
              <br />
              <span style={{ fontSize: 18 }}>{v.model}</span>
              <table className="w-100">
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>:</td>
                    <td>
                      <i>{v.color}</i>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>:</td>
                    <td>
                      <i>{v.gen}</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>:</td>
                    <td>
                      <b>{v.price}</b> <i>MMK</i>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="pt-2">
                      <MyButton
                        type={"submit"}
                        className="py-2"
                        text={"Shop Now"}
                        color={"primary"}
                      />
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

export default withMedia(ItemCards);
