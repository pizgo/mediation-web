import { motion } from "framer-motion";
import ContactData from "../components/ContactData";
import ContactForm from "../components/Contact/ContactForm";
import { emailLink, emailToFetch, phoneLink, phoneNumberToFetch } from "../utils/consts";

const ContactPage = () => {

    const classForContactData = "text-basic ms-2"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="section-container" id="contact">
            <div className="intro bg-primary w-100">
                <div className="container">
                    <div className="row">
                        <h3 className="header-intro">Kontakt</h3>
                            <p className="text-intro py-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                    </div>
                </div>
            </div>
            <div className="container main-content">
                <div className="row row-position mb-0">
                    <div className="col-lg-6">
                        <h3 className="header-contact">Formularz</h3>
                        <ContactForm/>
                    </div>
                    <div className="col-lg-6 py-4 py-lg-0 ps-lg-5">
                        <h3 className="header-contact">Dane kontaktowe:</h3>
                        <h5 className="header-contact mb-lg-4 text-lg-start">Izabela Kowalska</h5>
                        <div className="d-flex mb-lg-3">
                            <p className="text-basic fw-bold">Telefon: </p>
                            <ContactData fetchTitle={phoneNumberToFetch} link={phoneLink} class={classForContactData}/>
                        </div>
                        <div className="d-flex">
                            <p className="text-basic fw-bold">Adres email: </p>
                            <ContactData fetchTitle={emailToFetch} link={emailLink} class={classForContactData}/>
                        </div>
                    </div>
                </div>
            </div>
        {/*</div>*/}
      </section>
    </motion.div>
  );
};

export default ContactPage;
