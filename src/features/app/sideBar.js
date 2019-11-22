import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import MyLink from "../../tools/myLink";
import * as RoutePath from "../../config/routeConfig";
import * as Colors from "../../config/colorConfig";

const SideBar = () => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      boxShadow: "none",
      width: "30px",
      height: "30px",
      left: "85%",
      top: "23px"
    },
    bmBurgerBars: {
      background: Colors.textGray
    },
    bmBurgerBarsHover: {
      background: "#a90000"
    },
    bmCrossButton: {
      height: "24px",
      width: "24px"
    },
    bmCross: {
      background: "#bdc3c7"
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: 0
    },
    bmMenu: {
      background: "rgba(50,50,50)",
      padding: "2.5em .5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47"
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em"
    },
    bmItem: {
      display: "inline-block"
    },
    bmOverlay: {
      background: "rgb(0, 0, 0)",
      zIndex: 9
    }
  };

  return (
    <Menu
      styles={styles}
      right
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
    >
      <MyLink
        to={"/"}
        className="pl-3 pb-4 border-bottom text-light"
        id={"main"}
        style={{ fontSize: 15 }}
        text={"E.M.D"}
        noEffect
      />
      <MyLink
        to={`/${RoutePath.Men}`}
        className="pl-3 py-3 text-light"
        id={"Men"}
        style={{ fontSize: 15 }}
        text={"MEN"}
      />
      <MyLink
        to={`/${RoutePath.Women}`}
        className="pl-3 py-3 text-light"
        id={"Women"}
        style={{ fontSize: 15 }}
        text={"WOMEN"}
      />
      <MyLink
        to={`/${RoutePath.PermanentCollection}`}
        className="pl-3 py-3 text-light"
        id={"Collection"}
        style={{ fontSize: 15 }}
        text={"PARMANENT COLLECTION"}
      />
      <MyLink
        to={`/${RoutePath.Contact}`}
        className="px-3 py-3 text-light"
        id={"Contact"}
        style={{ fontSize: 15 }}
        text={"CONTACT US"}
      />
    </Menu>
  );
};

export default SideBar;

