import { useEffect, useState} from "react";
import sanityClient from "../../client.js";
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {

    const [phoneNumber, setPhoneNumber] = useState(null)
    const [email, setEmail] = useState(null)

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
    <section className="footer">
        <div className="container">
            <div className="row d-flex justify-content-between pt-3">
                <div className="col-5 col-md-6">
                    <p className="footer-text">POLITYKA PRYWATNOŚCI</p>
                    <p className="footer-text">2022 © Izabela Kowalska</p>
                </div>
                <div className="col-7 col-md-6 d-flex flex-column align-items-end ">
                    <div className="">
                        <div className="mb-2">
                            <FaPhoneAlt className="d-inline"/>
                            {phoneNumber && phoneNumber.map((number, index) => (
                                <p className="d-inline footer-text mx-2" key={index}>{number.body}</p>
                            ))}
                        </div>
                        <div>
                            <GrMail className="d-inline"/>
                            {email && email.map((address, index) => (
                                <p className="d-inline footer-text mx-2" key={index}>{address.body}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Footer;