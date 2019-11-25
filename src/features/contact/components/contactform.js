import React from "react";
import withMedia from "react-media-query-hoc/dist/with-media";
import SendIcon from "@material-ui/icons/Send";

import * as Fonts from "../../../config/fontConfig";
import MyInput from "../../../tools/myInput";
import MyButton from "../../../tools/myButton";

const ContactForm = props => {
  const { media } = props;
  return (
    <form className="py-4">
      <span style={{ fontSize: 30, fontFamily: Fonts.titleText }}>
        Let us know your suggestion!
      </span>

      <div className="d-flex flex-row flex-wrap justify-content-between">
        <div className="flex-fill  p-1">
          <MyInput
            id={"name"}
            label={"Name"}
            type={"text"}
            style={{ fontColor: "#5A6367" }}
          />
        </div>
        <div className="flex-fill  p-1">
          <MyInput
            id={"email"}
            label={"Email"}
            placeHolder={"Email"}
            type={"email"}
            style={{ fontColor: "#5A6367" }}
          />
        </div>
      </div>

      <div className="p-1 ">
        <MyInput
          label={"Subject"}
          id={"subject"}
          type={"text"}
          style={{ fontColor: "#5A6367" }}
        />
      </div>
      <div className="p-1">
        <MyInput id="message" label={"Your Message"} multiline />
      </div>
      <div className="mt-4 p-1">
        <MyButton type={"submit"} text={"Send Message"} className='py-3' icon={<SendIcon />} color={"Secondary"} />
      </div>
    </form>
  );
};
export default withMedia(ContactForm);
