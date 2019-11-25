import React from "react";
import MyLink from "../../../../tools/myLink";
import MiddleCarousel from "../../../home/components/middleCarousel";
import JSDATA from "../../../../assets/itemData.json";

import Photo1 from "../../../../assets/images/background/all/1.jpg";
import Photo2 from "../../../../assets/images/background/all/2.jpg";
import Photo3 from "../../../../assets/images/background/all/3.jpg";
import MyButton from "../../../../tools/myButton";

const ItemDetail = ({ match }) => {
  console.log(JSDATA);

  return (
    <div>
      <MiddleCarousel Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} />
      <div className="d-flex flex-row flex-wrap  p-2">
        <div className="col-lg-8">
          <div className="row">
            {JSDATA.map(
              (v, k) =>
                k < 3 && (
                  <div className="col-lg-6 col-md-6 p-4" key={k}>
                    <img className="w-100" id={v.id} src={Photo3} alt="dd" />
                  </div>
                )
            )}
          </div>
        </div>

        <div className="col-lg-4">
          <form>
            <span style={{fontSize:20,fontWeight:'bold'}}>LT 01 White</span>
            <br />
            <span>€239</span>
            <br />
            <span>
              Handmade in Portugal from premium nappa leather. Full calf-skin
              lining.
            </span>
            <br />
            <MyLink text={"More Information"} />
            <br />
            <div className="d-flex flex-row justify-content-between py-4">
              <div className="pr-2 w-50">
                <select className="form-control">
                  <option value={"white"} data-default>
                    White
                  </option>
                  <option value={"black"}>Black</option>
                  <option value={"gray"}>Gray</option>
                </select>
              </div>
              <div className="w-50">
                <select className="form-control">
                  <option value="" data-default disabled>
                    Sizes
                  </option>
                  <option value={"black"}>Black</option>
                  <option value={"gray"}>Gray</option>
                </select>
              </div>
            </div>

            <div className="py-2">
              <MyButton text={"Shop Now"} color="primary" />
            </div>
            <div className="py-2">
              <span>
                <i className="fa fa-check pr-2" />
              </span>
              <span>
                Order before 20:30 to receive between tomorrow - 3rd December.
              </span>
            </div>
            <div className="py-2">
              <span>
                <i className="fa fa-check pr-2" />
              </span>
              <span>
                with iDeal, Apple Pay, Mastercard, Visa, PayPal, Klarna
                Worldwide
              </span>
            </div>
            <div className="py-2">
              <span>
                <i className="fa fa-check pr-2" />
              </span>
              <span>shipping Free laces & in-soles</span>
            </div>
          </form>
        </div>
        <MyLink text={'Back to Home'} to={"/"}/>
      </div>
    </div>
  );
};

export default ItemDetail;
