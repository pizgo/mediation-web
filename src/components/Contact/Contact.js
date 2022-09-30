import {useState, useEffect} from "react";

const Contact = () => {
    const [input,setInput] = useState({name: "", email: "", message: ""});
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [success, setSuccess] = useState();

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



return (
       <div>
          <section>
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
                                     placeholder="Twoje imię i nazwisko"/>
                                     <p>{nameError}</p>
                          </div>
                          <div>
                              <input onChange={handleChange}
                                     type="email"
                                     name="email"
                                     value={input.email}
                                     placeholder="Twój adres e-mail"/>
                                     <p>{emailError}</p>
                          </div>
                          <div>
                              <textarea onChange={handleChange}
                                     name="message"
                                     value={input.message}
                                     placeholder="Miejsce na Twoją wiadomość"/>
                          </div>
                          <button type="submit">Wyślij</button>
                      </form>
                  </div>
                  <div>
                      <h4>Dane kontaktowe</h4>
                      <p>Izabela Starszewska</p>
                      <p>NUMER TELEFONU Z SANITY</p>
                      <p>EMAIL Z SANITY</p>
                  </div>
              </div>

          </section>
       </div>
    )
};

export default Contact;