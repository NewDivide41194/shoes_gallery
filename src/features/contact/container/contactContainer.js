import React from "react";

import ContactForm from "../components/contactform";
import ContactMap from "../components/contactMap";
import Footer from "../../app/footer";
import ContactHeader from "../components/contactHeader";
import ContactInfo from "../components/contactInfo";
import OpeningHour from "../components/openingHours";


const Contact = () => {
  return (
    <div className="">
      <ContactHeader />
      <div className="container">
        <div className="py-4">
          <ContactInfo />
        </div>
        <div className="py-4">
          <ContactForm />
        </div>
        <OpeningHour/>
      </div>
      <div className="col-12 px-0">
        <ContactMap />
      </div>

      <Footer />
    </div>
  );
};
export default Contact;
