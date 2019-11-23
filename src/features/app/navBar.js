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
  const { media } = props;

  useEffect(() => {
    window.onscroll = () => {
      const MyNav = document.getElementById("nav");

      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        MyNav.style.background = Colors.textBlack;

        MyNav.style.boxShadow = "1px 1px 5px black";
      } else {
        MyNav.style.background = "none";
        MyNav.style.boxShadow = "none";
      }
    };
  });

  // const PathName=match.history.location.pathname

  return (
    <div
      className="d-flex flex-row flex-wrap fixed-top justify-content-between py-3"
      id="nav"
    >
      <div>
        <MyLink
          to={"/"}
          className="pl-4 pr-2"
          style={{
            fontSize: 30,
            fontStyle: "bold",
            fontFamily: Fonts.titleText,
            color:Colors.textOragne,
          }}
          id={"Home"}
          text={"E.M.D Footwears"}
          noEffect
        />
        {media.mobile || (
          <span>
            <MyLink
              to={`/${RoutePath.Men}`}
              style={{ fontSize: fsc(media, 18),textShadow: "1px 1px 1px gray", color:Colors.textWhite
            }}
              className="px-3 py-2"
              id={"Men"}
              text={"MEN"}
            />
            <MyLink
              to={`/${RoutePath.Women}`}
              style={{ fontSize: fsc(media, 18),textShadow: "1px 1px 1px gray", color:Colors.textWhite  }}
              className="px-3 py-2"
              id={"Women"}
              text={"WOMEN"}
            />
            <MyLink
              to={`/${RoutePath.PermanentCollection}`}
              style={{ fontSize: fsc(media, 18),textShadow: "1px 1px 1px gray", color:Colors.textWhite  }}
              className="px-3 py-2"
              id={"Collection"}
              text={"PARMANENT COLLECTION"}
            />
            <MyLink
              to={`/${RoutePath.Contact}`}
              style={{ fontSize: fsc(media, 18),textShadow: "1px 1px 1px gray", color:Colors.textWhite  }}
              className="px-3 py-2"
              id={"Contact"}
              text={"CONTACT US"}
            />
          </span>
        )}
      </div>
      {media.mobile ? <SideBar /> : <SearchBar />}
    </div>
  );
};

export default withMedia(withRouter(NavBar));

const SearchBar = () => {
  return (
    <span className="py-2 px-4">
      <div>
        <input
          placeholder="Search Items"
          className="form-control float-right bg-transparent border"
          style={{boxShadow: "none" }}
        />

        <i
          className="fa fa-search position-absolute text-light"
          style={{
            marginLeft: 170,
            marginTop: 10,
            opacity: 0.5,
            cursor: "pointer"
          }}
        />
      </div>
    </span>
  );
};
