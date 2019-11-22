import React from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import { fsc } from "../assets/fontControlHelper";
import withMedia from "react-media-query-hoc/dist/with-media";

const MyButton = props => {
  const { media, type } = props;

  return (
    <Button
      type={type}
      variant="contained"
      color="secondary"
      className="w-100 py-3"
      endIcon={<SendIcon />}
    >
      Send Message
    </Button>
  );
};

export default withMedia(MyButton);
