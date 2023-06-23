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
      <section className="contact mt-5">
        <div className="container p-4">
            <div className="row text-center py-3">
                <h3 className="">Kontakt</h3>
            </div>
            <div className="row sectionRow mb-3">
               <div className="col-lg-6">
                 <h3 className="header-contact">Formularz</h3>
                  <ContactForm/>
               </div>
            <div className="col-lg-6 py-4 py-lg-0 ps-lg-5">
                <h3 className="header-contact">Dane kontaktowe:</h3>
                <h5 className="header-contact mb-lg-4 text-lg-start">Izabela Kowalska</h5>
                <div className="contactType d-flex mb-lg-3">
                    <p className="text-basic fw-bold">Telefon: </p>
                    <ContactData fetchTitle={phoneNumberToFetch} link={phoneLink} class={classForContactData}/>
               </div>
               <div className="contactType d-flex">
                    <p className="text-basic fw-bold">Adres email: </p>
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
