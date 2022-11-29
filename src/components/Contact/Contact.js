import {useState, useEffect} from "react";
import sanityClient from "../../client.js";
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';
import {motion} from "framer-motion";

const Contact = () => {
    const [input,setInput] = useState({name: "", email: "", message: "", checkbox: ""});
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [success, setSuccess] = useState();
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [email, setEmail] = useState(null)

    const handleChange = (e) => {
        const { name, value} = e.target;
        setInput((prevInputState) => ({
            ...prevInputState,
            [name]: value
        }));
    }
    const handleSubmit = e => {
        e.preventDefault()
        let isAnyError = false;
        if(input.name.length === 0) {
            setNameError('Nie zapomnij o wpisaniu imienia i nazwiska')
        } else {
            setNameError()
        }
        //TODO error email
        //TODO sending form to the email, setting success to "Wiadomość została wysłana. Wkrórtce się z Tobą skontaktuję"
    }

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "contact" && title == "phone number"]{
            body
        }`)
            .then((data) => {
                setPhoneNumber(data)
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "contact" && title == "email"]{
            body
        }`)
            .then((data) => {
                setEmail(data)
            })
            .catch(console.error);
    }, []);


return (
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ease: "easeOut", duration: 1}}>
          <section className='contact'>
              <div className='container'>
                  <div className='row text-center my-4'>
                      <h3 className="fw-bold my-5">Kontakt</h3>
                  </div>
                  <div className='row contact-row'>
                      <div className='col-6'>
                        <h4 className="mb-5">Masz pytanie? Wypełnij formularz</h4>
                          <form onSubmit={handleSubmit}>
                              <div className="mb-3">
                                  <textarea onChange={handleChange}
                                         name="name"
                                         className="form-control"
                                         value={input.name}
                                         placeholder="Twoje imię i nazwisko"/>
                              </div>
                              <div className="mb-3">
                                  <input onChange={handleChange}
                                         type="email"
                                         name="email"
                                         className="form-control"
                                         value={input.email}
                                         placeholder="Twój adres e-mail"/>
                              </div>
                              <div className="mb-3">
                                  <textarea onChange={handleChange}
                                         name="message"
                                         className="form-control"
                                         value={input.message}
                                         placeholder="Miejsce na Twoją wiadomość"/>
                              </div>
                              <div className="form-check">
                                  <input onChange={handleChange}
                                         type="checkbox"
                                         className="form-check-input"
                                         value={input.checkbox}/>
                                      <label className="form-check-label ms-3" htmlFor="flexCheckDefault">
                                          Zgadzam się na przetwarzanie moich danych osobowych przez Izabela Kowalska i oświadczam, że
                                          zapoznałem/am się z Polityką Prywatności
                                      </label>
                              </div>
                              <button className="button" type="submit">Wyślij</button>
                          </form>
                      </div>
                      <div className='col-6'>
                          <h4>Dane kontaktowe</h4>
                          <p>Izabela Kowalska</p>
                          <div>
                              <FaPhoneAlt/>
                              {phoneNumber && phoneNumber.map((number, index) => (
                                  <p key={index}>{number.body}</p>
                              ))}
                          </div>
                          <div>
                              <GrMail/>
                              {email && email.map((address, index) => (
                                  <p key={index}>{address.body}</p>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          </motion.div>
    )
};

export default Contact;

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