import React from "react";
import MyLink from "../../tools/myLink";
import MyInput from "../../tools/myInput";
import FooterBg from "../../assets/images/background/all/white.jpg";
import withMedia from "react-media-query-hoc/dist/with-media";

const Footer = props => {
  const {media}=props
  return (
    <div
      className="d-flex flex-column flex-fill justify-content-center px-2 border-top"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: `${media.mobile||media.tablet?'1rem':'6rem'}`,
        paddingBottom:  `${media.mobile||media.tablet?'1rem':'6rem'}`
      }}
    >
      <div className="d-flex flex-row flex-wrap justify-content-center border-bottom py-5">
        <div className="col-lg-3 col-md-6 text-justify py-2">
          <span style={{ fontWeight: "bold" }}>About</span>
          <br />
          <span style={{ fontSize: 13 }}>
            Founded in 2010 in Amsterdam, ETQ derived under the mindset of
            eliminating over-accessorized branding and focusing primarily on
            letting the quality of the product speak for itself. Read more
          </span>
        </div>
        <div className="col-lg-2 col-md-3  py-2">
          <span style={{ fontWeight: "bold" }}>Address</span>
          <br />
          <span style={{ fontSize: 13 }}>
            Singel 465, 1012 WP Amsterdam, The Netherlands
          </span>
        </div>
        <div className="col-lg-2 col-md-3  py-2">
          <span style={{ fontWeight: "bold" }}>Contact</span>
          <br />
          <MyLink text={"Email us"} id={"email"} />
          <br />
          <MyLink text={"+959 691 591 206"} id={"phone"} />
        </div>
        <div className="col-lg-2 col-md-3  py-2">
          <span style={{ fontWeight: "bold" }}>Info</span>
          <br />
          <MyLink text={"Shopping Info"} id={"Shopping"} />
          <br />
          <MyLink text={"Contact"} id={"Cont"} />
          <br />
          <MyLink text={"Carrers"} id={"Carrers"} />
        </div>
        <div className="col-lg-2 col-md-3  py-2">
          <span style={{ fontWeight: "bold" }}>Follow us</span>
          <br />
          <MyLink text={"Instagram"} id={"insta"} />
          <br />
          <MyLink text={"Facebook"} id={"fb"} />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap text-center pt-5">
        <div className="col-lg-6 col-sm-12">
          <div className="row">
            <span className="col-4 text-right">Newsletter</span>
            <MyInput className="col-5 mt-0" />
            <span className="text-left" style={{ cursor: "pointer" }}>
              Submit
            </span>
          </div>
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

export default withMedia(Footer);
