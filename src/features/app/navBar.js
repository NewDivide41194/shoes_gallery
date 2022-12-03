import React, { useEffect } from "react";
import { withMedia } from "react-media-query-hoc";
import { withRouter } from "react-router-dom";

import MyLink from "../../tools/myLink";
import * as RoutePath from "../../config/routeConfig";
import { fsc } from "../../assets/fontControlHelper";
import * as Colors from "../../config/colorConfig";
import SideBar from "./sideBar";
import * as Fonts from "../../config/fontConfig";

const NavBar = props => {
  const { media, history } = props;
  // console.log(history);
  // const ActiveStyle = "#999999";

  useEffect(() => {
    window.onscroll = () => {
      const MyNav = document.getElementById("nav");
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        MyNav.style.background = 'rgba(0,0,0,.9)';

        MyNav.style.boxShadow = "1px 1px 5px black";
      } else {
        MyNav.style.background = "none";
        MyNav.style.boxShadow = "none";
      }
    };
  });

  return (
    <div>
       <div
      className="d-flex flex-row flex-wrap fixed-top justify-content-between py-3"
      id="nav"
      style={{zIndex:15}}
    >
        <div>
          <MyLink
            to={"/"}
            className="pl-4 pr-2"
            style={{
              fontSize: 30,
              fontStyle: "bold",
              fontFamily: Fonts.titleText,
              color: Colors.textOragne
            }}
            id={"Home"}
            text={"E.M.D Footwears"}
            noEffect
          />
        </div>

        {media.desktop || media.largeDesktop ? (
          <div className='px-5 py-2'>
            <MyLink
              to={`/${RoutePath.Men}`}
              style={{
                fontSize: fsc(media, 18),
                textShadow: "1px 1px 1px gray",
                color: Colors.textWhite
              }}
              className="px-3 py-2"
              id={"Men"}
              text={"MEN"}
              active
            />
            {/* <MyLink
              to={`/${RoutePath.Women}`}
              style={{
                fontSize: fsc(media, 18),
                textShadow: "1px 1px 1px gray",
                color: Colors.textWhite
              }}
              className="px-3 py-2"
              id={"Women"}
              text={"WOMEN"}
            /> */}
            <MyLink
              to={`/${RoutePath.PermanentCollection}`}
              style={{
                fontSize: fsc(media, 18),
                textShadow: "1px 1px 1px gray",
                color: Colors.textWhite
              }}
              className="px-3 py-2"
              id={"Collection"}
              text={"PARMANENT COLLECTION"}
            />
            <MyLink
              to={`/${RoutePath.Contact}`}
              style={{
                fontSize: fsc(media, 18),
                textShadow: "1px 1px 1px gray",
                color: Colors.textWhite
              }}
              className="px-3 py-2"
              id={"Contact"}
              text={"CONTACT US"}
            />
          </div>
        ) : null}
    </div>

    </div>
   
  );
};

export default withMedia(withRouter(NavBar));
