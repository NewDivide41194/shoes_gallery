import React from "react";
import "./scrollDown.css";
const ScrollDown = () => {
    const _handleScrollDown=()=>{
        window.scrollTo({left:0,top:1050,behavior:'smooth'})
    }
  return (
    <div
      id="page-wrap"
      style={{
        width: 60,
        height: 72,
        position: "absolute",
        left: "50%",
        marginLeft: -30,
        bottom: 30,
        cursor: "pointer"
      }}
      onClick={_handleScrollDown}
    >
      <svg class="arrows w-100" >
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
};

export default ScrollDown;
