import { useState } from "react";
import { motion } from "framer-motion";
import ContactData from "../components/ContactData";
import ContactForm from "../components/Contact/ContactForm";

const ContactPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="contact mt-5">
        <div className="container">
            <div className="row text-center py-3">
                <h3 className="fw-bold my-md-5">Kontakt</h3>
            </div>
            <div className="row contact-row g-0 g-md- 5 p-4 p-md-0">
               <div className="col-md-6">
                 <h5 className="mb-4 mb-md-5 text-md-center">Formularz</h5>
                  <ContactForm/>
               </div>
            <div className="col-md-6 m-0 py-4 py-md-0">
                <h5 className="mb-4 mb-md-5 text-start text-md-center">Dane kontaktowe</h5>
                <p className="basic-text fw-bold">Izabela Kowalska</p>
                <div className="contactType d-flex">
                    <p className="basic-text fw-bold">Telefon: </p>
                    <ContactData fetchName='"phone number"' link="tel:+48000-000-000" style="basic-text ms-2"/>
               </div>
               <div className="contactType d-flex">
                    <p className="basic-text fw-bold">Adres email: </p>
                    <ContactData fetchName='"email"' link="mailto:yxz@fakemail.pl" style="basic-text ms-2"/>
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
