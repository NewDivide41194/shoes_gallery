import React from "react";
import { titleText } from "../../../config/fontConfig";

const ContactInfo = () => {
  return (
    <div id="page-wrap" className="d-flex flex-row flex-wrap text-center py-4" style={{lineHeight:2}}>
      <span style={{ fontSize: 35,fontFamily:titleText }} className="w-100">
        About E.M.D
      </span>
      <span>
        E.M.D Founded in Amsterdam in 2010, E.M.D was created as an answer to the
        luxury trend of over-abundant branding and excessive pricing. Our
        designs do not confine to fashion - we simply aspire to provide high
        quality, well-designed essentials for the right price. We work with a
        minimalistic philosophy, as we believe sustainability and durability are
        better for us and our world.
      </span>
    </div>
  );
};

export default ContactInfo;
