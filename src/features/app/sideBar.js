import React, { useState, useEffect } from "react";
import { push as Menu } from "react-burger-menu";
import MyLink from "../../tools/myLink";
import * as RoutePath from "../../config/routeConfig";
import * as Colors from "../../config/colorConfig";
import * as Fonts from '../../config/fontConfig'

const SideBar = () => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "30px",
      height: "30px",
      left: "85%",
      top: "23px"
    },
    bmBurgerBars: {
      background: Colors.textWhite,
      boxShadow: "1px 1px 1px gray"
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
      background: "rgba(255,255,255)",
      padding: "2.5em .5em 0",
      fontSize: "1.15em"
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
      background: "rgb(0, 0, 0,.5)",
      zIndex: 5
    }
  };
  const [MenuOpen,setMenuOpen]=useState(false)

  const CloseMenu = ()=> {
    setMenuOpen(!MenuOpen)
    console.log(MenuOpen);
  };

  const StateChange=(e)=>{setMenuOpen(e.isOpen)}

  return (
    <Menu
      styles={styles}
      right
      isOpen={MenuOpen}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}      
      onStateChange={(e) => StateChange(e)}
    >
          <MyLink
            to={"/"}
            className="text-center pb-2"
            style={{
              fontSize: 25,
              fontStyle: "bold",
              fontFamily: Fonts.titleText,              

            }}
            onClick={()=>CloseMenu()}
            id={"Home"}
            text={"E.M.D Footwears"}
            noEffect
          />
      <MyLink
        to={`/${RoutePath.Men}`}
        className="pl-3 py-3"
        id={"Men"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"MEN"}
      />
      <MyLink
        to={`/${RoutePath.Women}`}
        className="pl-3 py-3"
        id={"Women"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"WOMEN"}
      />
      <MyLink
        to={`/${RoutePath.PermanentCollection}`}
        className="pl-3 py-3"
        id={"Collection"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"PARMANENT COLLECTION"}
      />
      <MyLink
        to={`/${RoutePath.Contact}`}
        className="px-3 py-3"
        id={"Contact"}
        onClick={()=>CloseMenu()}

        style={{ fontSize: 15 }}
        text={"CONTACT US"}
      />
    </Menu>
  );
};

export default SideBar;