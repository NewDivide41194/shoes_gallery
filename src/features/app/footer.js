import React from "react";
import MyLink from "../../tools/myLink";

const Footer = () => {
  return (
    <div className="d-flex flex-column flex-fill justify-content-center py-5 px-4 border-top">
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <div className="col-lg-3 col-md-6 text-justify">
          <span style={{ fontWeight: "bold" }}>About</span>
          <br />
          <span>
            Founded in 2010 in Amsterdam, ETQ derived under the mindset of eliminating over-accessorized branding and focusing primarily on letting the quality of the product speak for itself. Read more
          </span>
        </div>
        <div className="col-lg-2 col-md-3">
          <span style={{ fontWeight: "bold" }}>Address</span>
          <br />
          Singel 465, 1012 WP Amsterdam, The Netherlands
        </div>
        <div className="col-lg-2 col-md-3">
          <span style={{ fontWeight: "bold" }}>Contact</span>
          <br />
          <MyLink text={"Email us"} id={"email"} />
          <br />
          <MyLink text={"+959 691 591 206"} id={"phone"} />
        </div>
        <div className="col-lg-2 col-md-3">
          <span style={{ fontWeight: "bold" }}>Info</span>
          <br />
          <MyLink text={"Shopping Info"} id={"Shopping"} />
          <br />
          <MyLink text={"Contact"} id={"Cont"} />
          <br />
          <MyLink text={"Carrers"} id={"Carrers"} />
        </div>
        <div className="col-lg-2 col-md-3">
          <span style={{ fontWeight: "bold" }}>Follow us</span>
          <br />
          <MyLink text={"Instagram"} id={"insta"} />
          <br />
          <MyLink text={"Facebook"} id={"fb"} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap text-center">
        <div className="col-lg-6 col-sm-12">
          <span>Newsletter</span>

          <span>Submit</span>
        </div>
        <div className="col-lg-6 col-sm-12">
          <span>
            <i className="fa fa-cc-paypal fa-2x px-1"></i>
            <i className="fa fa-cc-mastercard fa-2x px-1"></i>
            <i className="fa fa-cc-visa fa-2x px-1"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
