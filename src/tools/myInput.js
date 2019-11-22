import React from "react";
import TextField from "@material-ui/core/TextField";

import {fsc} from '../assets/fontControlHelper' 
import withMedia from "react-media-query-hoc/dist/with-media";

const MyInput = props => {
  const { media } = props;
  const {
    style,
    className,
    value,
    placeHolder,
    type,
    id,
    multiline,
    label,
    width
  } = props;
  const defaultStyle = {
    width: width === undefined ? "100%" : width,
    fontSize: fsc(media, 14),
  };
  const userStyle = style === undefined ? {} : style;

  return (
    <TextField
      id={id}
      style={{
        ...defaultStyle,
        ...userStyle,
      }}
      placeholder={placeHolder}
      className={`form-rounded ${className}`}
      label={label}
      margin="normal"
      type={type}
      multiline={multiline===undefined?false:true}
      rows={2}
      // variant='outlined'
      required
    />
  );
};

export default withMedia(MyInput);
