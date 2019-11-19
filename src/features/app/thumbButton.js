import React from "react";

const ThumbButton = props => {
  const { FunctionLarge, FunctionSmall } = props;

  return (
    <div className="w-100 text-right pr-4 text-secondary" >
      <i className="fa fa-th-large px-2" style={{cursor:'pointer'}} onClick={FunctionLarge}/>

      <i className="fa fa-th" style={{cursor:'pointer'}} onClick={FunctionSmall}/>
    </div>
  );
};

export default ThumbButton;
