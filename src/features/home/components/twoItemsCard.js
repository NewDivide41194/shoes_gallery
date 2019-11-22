import React from "react";

const TwoItemsCard = props => {
  return (
    <div className="d-flex flex-row flex-wrap py-5">
      {TwoItemsData.map((v, k) => (
        <div className="col-lg-6" key={k}>
          <div className="">
            <img
              className="w-100"
              src={process.env.PUBLIC_URL + v.imgURL}
              alt="ThreeItems"
            />
          </div>
          <span>{v.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TwoItemsCard;

const TwoItemsData = [
  {
    id: 1,
    name: "Nike Sport",
    imgURL: "images/shoes/men/nike/nk2.jpg"
  },
  {
    id: 2,
    name: "Nike Sport",
    imgURL: "images/shoes/men/timberland/tbl1.jpg"
  }
];
