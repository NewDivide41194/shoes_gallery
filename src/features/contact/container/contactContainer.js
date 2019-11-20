import React from "react";

import ContactForm from "../components/contactform";
import ContactInfo from "../components/contactInfo";
import Footer from '../../app/footer'

const Contact = () => {
  return (
    <div className="container-fluid p-0">
      <div className='container'>
         <div className='d-flex flex-wrap'>
        <div className='col-lg-6'>
            <ContactInfo/>   
        </div>
        <div className='col-lg-6'>
            <ContactForm/>
        </div>
    </div>
      </div>
     
        <Footer/>
    </div>
  );
};
export default Contact;
