import React from "react";
import { Link } from "react-router-dom";

import * as Colors from "../config/colorConfig";

const MyLink = props => {
  const { text, style, className, id, to, noEffect } = props;
  const defaultStyle = {
    textDecoration: "none",
    color: Colors.textBlack,
    width: "100%",    
  };
  const userStyle = style === undefined ? {} : style;
  const onHover = () => {
    const LinkID = document.getElementById(`${id}`);
    LinkID.style.borderBottom = "1px solid gray";
  };
  const onLeave = () => {
    const LinkID = document.getElementById(`${id}`);
    LinkID.style.border = "none";
  };

  return (
    <Link
      id={`${id}`}
      className={className}
      style={{ ...defaultStyle, ...userStyle }}
      to={to === undefined ? "#" : to}
      onMouseOver={noEffect===undefined?onHover:null}
      onMouseLeave={noEffect===undefined?onLeave:null}
    >
      {text}
    </Link>
  );
};

export default MyLink;
