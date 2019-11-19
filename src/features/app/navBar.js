import React, { useEffect } from "react";
import { withMedia } from "react-media-query-hoc";
import { withRouter } from "react-router-dom";

import MyLink from "../../tools/myLink";
import * as RoutePath from "../../config/routeConfig";
import { fsc } from "../../assets/fontControlHelper";
import * as Colors from "../../config/colorConfig";

const NavBar = ({ match, media }) => {
  // const { media,match } = props;
  console.log(window.location);

  useEffect(() => {
    window.onscroll = () => {
      const MyNav = document.getElementById("nav");

      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        MyNav.style.background = Colors.NavBgColor;
        MyNav.style.color = Colors.textWhite;

        MyNav.style.boxShadow = "1px 1px 10px gray";
      } else {
        MyNav.style.background = "none";
        MyNav.style.boxShadow = "none";
      }
    };
  });

  // const PathName=match.history.location.pathname

  return (
    <div
      className="d-flex flex-row flex-wrap fixed-top justify-content-between py-4"
      id="nav"
    >
      <div className="flex-row">
        <MyLink
          to={"/"}
          className="px-4"
          style={{ fontSize: fsc(media, 25), fontStyle: "bold" }}
          id={"Home"}
          text={"E.M.D"}
          noEffect
        />
        {media.mobile || media.tablet || (
          <span>
            <MyLink
              to={`/${RoutePath.Men}`}
              style={{ fontSize: fsc(media, 18) }}
              className="px-3 py-2"
              id={"Men"}
              text={"Men"}
            />
            <MyLink
              to={`/${RoutePath.Women}`}
              style={{ fontSize: fsc(media, 18) }}
              className="px-3 py-2"
              id={"Women"}
              text={"Women"}
            />
            <MyLink
              to={`/${RoutePath.PermanentCollection}`}
              style={{ fontSize: fsc(media, 18) }}
              className="px-3 py-2"
              id={"Collection"}
              text={"Parmanent Collection"}
            />
            <MyLink
              to={`/${RoutePath.Contact}`}
              style={{ fontSize: fsc(media, 18) }}
              className="px-3 py-2"
              id={"Contact"}
              text={"Contact Us"}
            />
          </span>
        )}
      </div>
      {media.mobile ? (
        <span className="px-4">
          <i
            className="fa fa-list"
            style={{
              cursor: "pointer"
            }}
          />
        </span>
      ) : (
        <span className="py-2 px-4">
          <div>
            <input
              placeholder="Search Items"
              className="form-control float-right bg-transparent border"
              style={{ backgroundColor: "none", boxShadow: "none" }}
            />

            <i
              className="fa fa-search position-absolute text-dark"
              style={{
                marginLeft: 170,
                marginTop: 10,
                opacity: 0.5,
                cursor: "pointer"
              }}
            />
          </div>
        </span>
      )}
    </div>
  );
};

export default withMedia(withRouter(NavBar));
