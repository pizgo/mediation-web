import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "contact" && title == "phone number"]{body}`)
      .then((data) => {
        setPhoneNumber(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "contact" && title == "email"]{body}`)
      .then((data) => {
        setEmail(data);
      })
      .catch(console.error);
  }, []);

  const Phone =  () => {
    return (
        phoneNumber && phoneNumber.map((number, index) => (
          <a href="tel:+48000-000-000" className="footer-text" key={index}>
            {number.body}
          </a>
         ))
      )
  }

  const Mail = () => {
    return (
        email && email.map((address, index) => (
            <a href="mailto:yxz@fakemail.pl" className="footer-text" key={index}>
              {address.body}
            </a>
        ))
    )
  }

  const FooterForMobile = () => {
      return (
          <div className="d-md-none d-flex flex-column py-3 px-4">
              <div className="d-flex align-items-center pb-2">
                  <FaPhoneAlt className="contactIcon" />
                  <Phone/>
              </div>
              <div className="d-flex align-items-center pb-4">
                  <GrMail className="contactIcon" />
                  <Mail/>
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
                      <Phone/>
                  </div>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center py-2 px-2">
                  <p className="footer-text" id="copyright">2022 © Izabela Kowalska</p>
                  <div className="d-flex align-items-center">
                      <GrMail className="contactIcon" />
                      <Mail/>
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
