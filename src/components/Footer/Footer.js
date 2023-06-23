import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import ContactData from "../ContactData";
import { emailLink, emailToFetch, phoneLink, phoneNumberToFetch } from "../../utils/consts";

const Footer = () => {

  const classForContactDataFooter = "text-footer"

  const FooterForMobile = () => {
      return (
          <div className="d-md-none d-flex flex-column py-3 px-4">
              <div className="d-flex align-items-center pb-2">
                  <FaPhoneAlt className="footer-icon"/>
                  <ContactData fetchTitle={phoneNumberToFetch} link={phoneLink} class={classForContactDataFooter}/>
              </div>
              <div className="d-flex align-items-center pb-4">
                  <GrMail className="footer-icon" />
                  <ContactData fetchTitle={emailToFetch} link={emailLink} class={classForContactDataFooter}/>
              </div>
              <a href="" className="text-footer pb-2" role="button">POLITYKA PRYWATNOŚCI</a>
              <p className="text-footer pb-2" id="copyright">2022 © Izabela Kowalska</p>
          </div>
      )
  };

  const FooterForBiggerScreens = () => {
      return (
          <div className="d-none d-md-block py-4 py-lg-2">
              <div className="d-flex flex-row justify-content-between align-items-center p-2 p-lg-1">
                  <a href="" className="text-footer">POLITYKA PRYWATNOŚCI</a>
                  <div className="d-flex align-items-center">
                      <FaPhoneAlt className="footer-icon" />
                      <ContactData fetchTitle={phoneNumberToFetch} link={phoneLink} class={classForContactDataFooter}/>
                  </div>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center p-2 p-lg-1">
                  <p className="text-footer" id="copyright">2022 © Izabela Kowalska</p>
                  <div className="d-flex align-items-center">
                      <GrMail className="footer-icon" />
                      <ContactData fetchTitle={emailToFetch} link={emailLink} class={classForContactDataFooter}/>
                  </div>
              </div>
          </div>
      )
  };

  return (
    <section className="footer bg-primary">
      <div className="container">
          <FooterForMobile/>
          <FooterForBiggerScreens/>
      </div>
    </section>
  );
};

export default Footer;
