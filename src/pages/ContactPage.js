import { useState } from "react";
import { motion } from "framer-motion";
import ContactData from "../components/ContactData";

const ContactPage = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    checkbox: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInputState) => ({
      ...prevInputState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isAnyError = false;
    if (input.name.length === 0) {
      setNameError("Nie zapomnij o wpisaniu imienia i nazwiska");
    } else {
      setNameError();
    }
    //TODO error email
    //TODO sending form to the email, setting success to "Wiadomość została wysłana. Wkrórtce się z Tobą skontaktuję"
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="contact mt-5">
        <div className="container">
          <div className="row text-center">
            <h3 className="fw-bold py-4 p-md-0 my-md-5">Kontakt</h3>
          </div>
          <div className="row contact-row g-5 p-4 p-md-0">
            <div className="col-12 col-md-6 m-0 py-4 py-md-0 ">
              <h5 className="mb-4 mb-md-5 text-md-center">Formularz</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input onChange={handleChange}
                    type="text"
                    name="name"
                    className="form-control mb-4"
                    value={input.name}
                    placeholder="Twoje imię i nazwisko"/>
                </div>
                <div className="mb-3">
                  <input onChange={handleChange}
                    type="email"
                    name="email"
                    className="form-control mb-4"
                    value={input.email}
                    placeholder="Twój adres e-mail"/>
                </div>
                <div className="mb-3">
                  <textarea onChange={handleChange}
                    name="message"
                    className="form-control"
                    rows="8"
                    value={input.message}
                    placeholder="Miejsce na Twoją wiadomość"/>
                </div>
                <div className="form-check">
                  <input onChange={handleChange}
                    type="checkbox"
                    className="form-check-input"
                    value={input.checkbox}/>
                  <label
                    className="form-check-label ms-3 text-justify"
                    htmlFor="flexCheckDefault">
                    Zgadzam się na przetwarzanie moich danych osobowych przez
                    Izabela Kowalska i oświadczam, że zapoznałem/am się z
                    Polityką Prywatności
                  </label>
                </div>
                <button className="button my-4" type="submit">
                  Wyślij
                </button>
              </form>
            </div>
            <div className="col-12 col-md-6 m-0 py-4 py-md-0">
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

// <form onSubmit={handleSubmit}>
//                               <div>
//                                   <input onChange={handleChange}
//                                          type="text"
//                                          name="name"
//                                          value={input.name}
//                                          placeholder="Twoje imię i nazwisko"
//                                           />
//                                          <p>{nameError}</p>
//                               </div>
//                               <div>
//                                   <input onChange={handleChange}
//                                          type="email"
//                                          name="email"
//                                          value={input.email}
//                                          placeholder="Twój adres e-mail"
//                                           />
//                                          <p>{emailError}</p>
//                               </div>
//                               <div>
//                                   <textarea onChange={handleChange}
//                                          name="message"
//                                          value={input.message}
//                                          placeholder="Miejsce na Twoją wiadomość"
//                                              />
//                               </div>
