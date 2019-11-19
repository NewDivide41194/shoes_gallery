import React, { useEffect } from "react";
import BG1 from "../../assets/images/background/bg1.jpg";
import { withMedia } from "react-media-query-hoc";

const Header = props => {
  const { media } = props;
  useEffect(() => {
    const BgCover = document.getElementById("BG");
    // BgCover.style.zoom='1.5'
  });
  return (
    <div
      id="BG"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundPosition: "center",
        height: media.desktop
          ? 800
          : media.tablet
          ? 600
          : media.mobile
          ? 300
          : 700,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%"
      }}
    ></div>
  );
};

export default withMedia(Header);
