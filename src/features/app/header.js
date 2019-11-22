import React from "react";
import BG1 from "../../assets/images/background/bg1.jpg";
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
          ? 800
          : media.tablet
          ? 600
          : media.mobile
          ? 400
          : 1100,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        paddingTop:'35%',
        paddingLeft:'10%'
      }}
    >
      <span style={{fontSize:55,}}>NIKE</span><br/>
      <span style={{fontSize:35,}}>Just do it</span>

    </div>
  );
};

export default withMedia(Header);
