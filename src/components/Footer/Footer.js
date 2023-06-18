import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact" && title == "phone number"]{
            body
        }`
      )
      .then((data) => {
        setPhoneNumber(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact" && title == "email"]{
            body
        }`
      )
      .then((data) => {
        setEmail(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="footer">
      <div className="container">
        <div className="row d-flex justify-content-between py-3">
          <div className="col-5 col-md-6">
            <p className="footer-text d-block mx-0">POLITYKA PRYWATNOŚCI</p>
            <p className="footer-text mx-0">2022 © Izabela Kowalska</p>
          </div>
          <div className="col-7 col-md-6 d-flex flex-column align-items-end">
            <div className="">
              <div className="">
                <FaPhoneAlt className="contactIcon" />
                {phoneNumber &&
                  phoneNumber.map((number, index) => (
                    <p className="footer-text" key={index}>
                      {number.body}
                    </p>
                  ))}
              </div>
              <div className="">
                <GrMail className="contactIcon" />
                {email &&
                  email.map((address, index) => (
                    <p className="footer-text" key={index}>
                      {address.body}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
