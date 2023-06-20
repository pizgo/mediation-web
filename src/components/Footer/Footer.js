import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import ContactData from "../ContactData";

const Footer = () => {

  const FooterForMobile = () => {
      return (
          <div className="d-md-none d-flex flex-column py-3 px-4">
              <div className="d-flex align-items-center pb-2">
                  <FaPhoneAlt className="contactIcon" />
                  <ContactData fetchName='"phone number"' link="tel:+48000-000-000" style="footer-text"/>
              </div>
              <div className="d-flex align-items-center pb-4">
                  <GrMail className="contactIcon" />
                  <ContactData fetchName='"email"' link="mailto:yxz@fakemail.pl" style="footer-text"/>
              </div>
              <a href="" className="footer-text pb-2" role="button">POLITYKA PRYWATNOŚCI</a>
              <p className="footer-text pb-2" id="copyright">2022 © Izabela Kowalska</p>
          </div>
      )
  };

  const FooterForBiggerScreens = () => {
      return (
          <div className="d-none d-md-block py-4">
              <div className="d-flex flex-row justify-content-between align-items-center py-2 px-2">
                  <a href="" className="footer-text">POLITYKA PRYWATNOŚCI</a>
                  <div className="d-flex align-items-center">
                      <FaPhoneAlt className="contactIcon" />
                      <ContactData fetchName='"phone number"' link="tel:+48000-000-000" style="footer-text"/>
                  </div>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center py-2 px-2">
                  <p className="footer-text" id="copyright">2022 © Izabela Kowalska</p>
                  <div className="d-flex align-items-center">
                      <GrMail className="contactIcon" />
                      <ContactData fetchName='"email"' link="mailto:yxz@fakemail.pl" style="footer-text"/>
                  </div>
              </div>
          </div>
      )
  };

  return (
    <section className="footer">
      <div className="container">
          <FooterForMobile/>
          <FooterForBiggerScreens/>
      </div>
    </section>
  );
};

export default Footer;
