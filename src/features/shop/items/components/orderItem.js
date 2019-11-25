import React from "react";
import MyLink from "../../../../tools/myLink";

const OrderPage = () => {
  return (
    <div className='d-flex flex-row'>
        <div className='col-lg-6'>
             <form>
        <span>LT 01 Black</span>
        <span>€239</span>
        <span>
          Handmade in Portugal from premium nappa leather. Full calf-skin
          lining.
        </span>
        <MyLink>More Information</MyLink>
        <select className="form-control">
          <option>White</option>
          <option>Black</option>
          <option>Gray</option>
        </select>
      </form>
        </div>
     
    </div>
  );
};

export default OrderPage;
