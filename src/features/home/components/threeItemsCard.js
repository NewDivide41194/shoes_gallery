import React from "react";
import MyLink from "../../../tools/myLink";
import * as RoutePath from '../../../config/routeConfig'
import JSDATA from '../../../assets/itemData.json'

const ThreeItemsCard = props => {
  return (
      <div className="d-flex flex-row flex-wrap py-5">
      {JSDATA.map((v, k) => (
        k<3&&<div className="col-lg-4 col-md-4" key={k}>
            <img
              className="card-img-top"
              src={process.env.PUBLIC_URL + v.imgURL[0]}
              alt="ThreeItems"
            />
          <span className='card-title'>{v.brand}</span><br/>
          <MyLink to={`/${RoutePath.Item}/${v.id}`} text={'View Detail'} id={v.id} />
        </div>
      ))}
    </div>
    
  );
};

export default ThreeItemsCard;

