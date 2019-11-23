import React from "react";
import { withMedia } from "react-media-query-hoc";

const Header = props => {
  const { media,Background } = props;

  return (
    <div
      id="BG"
      style={{
        backgroundImage: `url(${Background})`,
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
      className='text-light'
    >
      <span style={{fontSize:45,fontWeight:'bold',textShadow:'1px 1px 2px gray'}}>NIKE</span><br/>
      <span style={{fontSize:35,textShadow:'1px 1px 1px gray'}}>Just do it .</span>

    </div>
  );
};

export default withMedia(Header);

