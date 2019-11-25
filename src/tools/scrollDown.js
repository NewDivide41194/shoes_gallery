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
        bottom: 40,
        cursor: "pointer"
      }}
      onClick={_handleScrollDown}
    >
      <svg className="arrows w-100" >
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
};

export default ScrollDown;
