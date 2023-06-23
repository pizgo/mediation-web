import { motion } from "framer-motion";
import ContactData from "../components/ContactData";
import ContactForm from "../components/Contact/ContactForm";
import { emailLink, emailToFetch, phoneLink, phoneNumberToFetch } from "../utils/consts";

const ContactPage = () => {

    const classForContactData = "basicText ms-2"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="contact mt-5">
        <div className="container p-4">
            <div className="row text-center py-3">
                <h3 className="header">Kontakt</h3>
            </div>
            <div className="row sectionRow mb-3">
               <div className="col-lg-6">
                 <h4 className="headerSmall">Formularz</h4>
                  <ContactForm/>
               </div>
            <div className="col-lg-6 py-4 py-lg-0 ps-lg-5">
                <h4 className="headerSmall">Dane kontaktowe:</h4>
                <h5 className="headerSmall mb-lg-4 text-lg-start">Izabela Kowalska</h5>
                <div className="contactType d-flex mb-lg-3">
                    <p className="basicText fw-bold">Telefon: </p>
                    <ContactData fetchTitle={phoneNumberToFetch} link={phoneLink} class={classForContactData}/>
               </div>
               <div className="contactType d-flex">
                    <p className="basicText fw-bold">Adres email: </p>
                    <ContactData fetchTitle={emailToFetch} link={emailLink} class={classForContactData}/>
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
