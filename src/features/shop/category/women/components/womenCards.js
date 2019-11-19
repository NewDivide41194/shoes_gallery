import React from "react";

const WomenItemCards = () => {
  return (
    <div>
      {ForMenData.map((v,k) => (
        <div key={k}>
            <div className='card w-25' >
            <img className='w-100' src={process.env.PUBLIC_URL+v.imgURL} alt='Women Shoes'/>
            </div>
        </div>
      ))}
    </div>
  );
};

export default WomenItemCards;

const ForMenData = [
  {
    id: 1,
    code:'NK-001',
    name: "Nike",
    color: "black",
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
    imgURL: "images/shoes/women/nike/nk1.jpg"
  }
];
