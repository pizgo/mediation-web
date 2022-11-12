import {useState, useEffect} from "react";
import sanityClient from "../../client.js";
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const [input,setInput] = useState({name: "", email: "", message: ""});
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
          <section className='contact'>
              <h2>Kontakt</h2>
              <div>
                  <div>
                    <h4>Masz pytanie? Wypełnij formularz</h4>
                      <form onSubmit={handleSubmit}>
                          <div>
                              <input onChange={handleChange}
                                     type="text"
                                     name="name"
                                     value={input.name}
                                     placeholder="Twoje imię i nazwisko"
                                     required />
                                     <p>{nameError}</p>
                          </div>
                          <div>
                              <input onChange={handleChange}
                                     type="email"
                                     name="email"
                                     value={input.email}
                                     placeholder="Twój adres e-mail"
                                     required />
                                     <p>{emailError}</p>
                          </div>
                          <div>
                              <textarea onChange={handleChange}
                                     name="message"
                                     value={input.message}
                                     placeholder="Miejsce na Twoją wiadomość"
                                        required />
                          </div>
                          <button type="submit">Wyślij</button>
                      </form>
                  </div>
                  <div>
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

          </section>
    )
};

export default Contact;