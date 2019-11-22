import React from "react";
import BG1 from "../../../assets/images/background/bg2.jpg";
import { withMedia } from "react-media-query-hoc";

const Header = props => {
  const { media } = props;

  return (
    <div
      id="BG"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundPosition: "center",
        height: media.desktop
          ? 300
          : media.tablet
          ? 300
          : media.mobile
          ? 200
          : 400,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default withMedia(Header);
