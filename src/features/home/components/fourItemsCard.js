import React from "react";
import MyLink from "../../../tools/myLink";

const FourItemsCard = () => {
  const _handleHover = e => {
    const IMG = document.getElementById(e.target.id);
    IMG.style.filter = "brightness(50%)";
    // document.getElementById(e).style.opacity = 1;
  };
  const _handleLeave = e => {
    const IMG = document.getElementById(e.target.id);
    IMG.style.filter = "brightness(100%)";
    // document.getElementById(e).style.opacity = 0;

  };
  return (
    <div className="d-flex flex-row flex-wrap py-5">
      {FourItemsData.map((v, k, a) => (
        <div className="col-lg-3 p-2" key={k}>
          <div className="card">
            <div className="text-center">
              <MyLink
                className="w-100 position-absolute"
                // id={a}
                style={{ paddingTop: "7rem", zIndex: 2, opacity: 0 }}
                text={"Shop this item"}
              />

              <img
                src={process.env.PUBLIC_URL + v.imgURL}
                className="card-img-top"
                id={v.id}
                alt="..."
                onMouseOver={id => _handleHover(id)}
                onMouseLeave={id => _handleLeave(id)}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{v.name}</h5>
              <p className="card-text">{v.desc}</p>
              <a href="#" className="btn btn-secondary" alt="FourItems">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourItemsCard;

const FourItemsData = [
  {
    id: 1,
    name: "Nike Sport",
    imgURL: "images/shoes/men/nike/nk1.jpg",
    desc:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 2,
    name: "Nike Sport",
    imgURL: "images/shoes/men/nike/nk2.jpg",
    desc:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 3,
    name: "Nike Sport",
    imgURL: "images/shoes/men/nike/nk3.jpeg",
    desc:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 4,
    name: "Nike Sport",
    imgURL: "images/shoes/men/nike/nk4.jpg",
    desc:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
];
