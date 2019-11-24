import React from "react";
import MyLink from "../../../../tools/myLink";
import MiddleCarousel from "../../../home/components/middleCarousel";
import JSDATA from "../../../../assets/itemData.json";

import Photo1 from "../../../../assets/images/background/all/1.jpg";
import Photo2 from "../../../../assets/images/background/all/2.jpg";
import Photo3 from "../../../../assets/images/background/all/3.jpg";

const ItemDetail = ({ match }) => {
  console.log(match.params);

  return (
    <div>
      <MiddleCarousel Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} />
      <div className="d-flex flex-row p-4">
        <div className="col-lg-6">
          {JSDATA.map(
            (v, k) =>
              k < 1 && (
                <div className="col-lg-6" key={k}>
                  {(v.id = match.params.id)}
                  {v.price}
                </div>
              )
          )}
          <form>
            <span>LT 01 Black</span>
            <br />
            <span>€239</span>
            <br />
            <span>
              Handmade in Portugal from premium nappa leather. Full calf-skin
              lining.
            </span>
            <br />
            <MyLink>More Information</MyLink>
            <br />
            <select className="form-control">
              <option value={"white"} data-default>
                White
              </option>
              <option value={"black"}>Black</option>
              <option value={"gray"}>Gray</option>
            </select>
            <select className="form-control">
              <option value="" data-default disabled>
                Sizes
              </option>
              <option value={"black"}>Black</option>
              <option value={"gray"}>Gray</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
