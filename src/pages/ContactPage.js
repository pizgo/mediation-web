import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { motion } from "framer-motion";

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
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);

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

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact" && title == "phone number"]{body}`
      )
      .then((data) => {
        setPhoneNumber(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact" && title == "email"]{body}`
      )
      .then((data) => {
        setEmail(data);
      })
      .catch(console.error);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="contact mt-5">
        <div className="container">
          <div className="row text-center">
            <h3 className="fw-bold my-md-5">Kontakt</h3>
          </div>
          <div className="row contact-row g-5 p-4 p-md-0">
            <div className="col-12 col-md-6">
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
            <div className="col-12 col-md-6" mb-5>
              <h5 className="mb-4 mb-md-5 text-start text-md-center">Dane kontaktowe</h5>
              <h5 className="fw-bold">Izabela Kowalska</h5>
              <div className="contactType">
                <p className="contactText fw-bold">Telefon: </p>
                {/*<FaPhoneAlt className="contactIcon"/>*/}
                {phoneNumber &&
                  phoneNumber.map((number, index) => (
                    <p className="contactText" key={index}>
                      {number.body}
                    </p>
                  ))}
              </div>
              <div className="contactType">
                <p className="contactText fw-bold">Adres email: </p>
                {/*<GrMail className="contactIcon"/>*/}
                {email &&
                  email.map((address, index) => (
                    <p className="contactText" key={index}>
                      {address.body}
                    </p>
                  ))}
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
