import React from "react";
import MyLink from "../../../tools/myLink";

const ThreeItemsCard = props => {
  return (
    <div className="d-flex flex-row flex-wrap py-5">
      {ThreeItemsData.map((v, k) => (
        <div className="col-lg-4 col-md-4" key={k}>
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + v.imgURL}
              alt="ThreeItems"
            />
          <span className='card-title'>{v.name}</span><br/>
          <MyLink text={'View Detail'} id={v.id}/>
        </div>
      ))}
    </div>
  );
};

export default ThreeItemsCard;

const ThreeItemsData = [
  {
    id: 1,
    name: "Timberland Boots",
    imgURL: "images/shoes/men/timberland/tbl1.jpg"
  },
  {
    id: 2,
    name: "Timberland Boots",
    imgURL: "images/shoes/men/timberland/tbl2.jpg"
  },
  {
    id: 3,
    name: "Timberland Boots",
    imgURL: "images/shoes/men/timberland/tbl3.jpg"
  }
];
