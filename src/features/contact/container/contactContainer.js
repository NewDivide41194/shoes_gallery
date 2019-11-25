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
        <div className='row py-4'>
          <div className="col-lg-6 col-sm-12">
            <ContactForm />
          </div>
          <div className="col-lg-6 col-sm-12 p-0">
            <ContactMap />
          </div>
        </div>
        <OpeningHour />
      </div>

      <Footer />
    </div>
  );
};
export default Contact;
