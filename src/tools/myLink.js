import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as Colors from "../config/colorConfig";

const MyLink = props => {
  const { text, style, className, id, to, noEffect } = props;
  const [hover, SetHover] = useState(false);
  const defaultStyle = {
    textDecoration: "none",
    color: Colors.textBlack,
    width: "100%",
    transition: ".5s"
  };
  const userStyle = style === undefined ? {} : style;
  const onHover = () => {
    SetHover(!hover)
    const LinkID = document.getElementById(id);
    LinkID.style.borderBottom = "3px solid gray";

  };
  const onLeave = () => {
    SetHover(!hover)

    const LinkID = document.getElementById(id);
    LinkID.style.borderBottom = "none";

  };
console.log(hover);

  return (
      <Link
      id={`${id}`}
      className={className}
      style={{ ...defaultStyle, ...userStyle }}
      to={to === undefined ? "#" : to}
      onMouseOver={noEffect === undefined ? onHover : null}
      onMouseLeave={noEffect === undefined ? onLeave : null}
    >
      {text}
    </Link>

    
  );
};

export default MyLink;
