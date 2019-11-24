import React from "react";
import Button from "@material-ui/core/Button";

import { fsc } from "../assets/fontControlHelper";
import withMedia from "react-media-query-hoc/dist/with-media";

const MyButton = props => {
  const { media, type, text,icon,color,className } = props;

  return (
    <Button
      type={type}
      variant="contained"
      color={color}
      className={`w-100 ${className}`}
      endIcon={icon}
    >
      {text}
    </Button>
  );
};

export default withMedia(MyButton);
