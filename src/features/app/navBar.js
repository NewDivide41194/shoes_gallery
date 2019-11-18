import React from "react";
import { withMedia } from "react-media-query-hoc";
import {withRouter} from 'react-router-dom'

import MyLink from "../../tools/myLink";
import * as RoutePath from "../../config/routeConfig";

const NavBar = match => {
    const PathName=match.history.location.pathname
    
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between bg-light py-4">
      <div className="flex-row">
        <MyLink
          to={'/'}
          className="px-3"
          style={{ fontSize: 25, fontStyle: "bold" }}
          text={"E.M.D"}
          noEffect
        />
        <MyLink
          to={`/${RoutePath.Men}`}
          className="px-3 py-2"
          id={"Men"}
          text={"Men"}
          style={{borderBottom:PathName===`/${RoutePath.Men}`?'1px solid gray':null}}
        />
        <MyLink
          to={`/${RoutePath.Women}`}
          className="px-3 py-2"
          id={"Women"}
          text={"Women"}
        />
        <MyLink
          to={`/${RoutePath.PermanentCollection}`}
          className="px-3 py-2"
          id={"Collection"}
          text={"Parmanent Collection"}
        />
        <MyLink
          to={`/${RoutePath.Contact}`}
          className="px-3 py-2"
          id={"Contact"}
          text={"Contact Us"}
        />
      </div>
      <div className='py-2 px-5'>
          <i className='fa fa'></i>
          Search
      </div>
    </div>
  );
};

export default withRouter(withMedia(NavBar));
