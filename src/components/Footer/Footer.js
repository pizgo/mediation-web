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
    <>
        <div className='container'>
            <div>
                <p>POLITYKA PRYWATNOŚCI</p>
                <p>2022 © Izabela Starszewska</p>
            </div>
            <div>
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
    </>
    )
};

export default Footer;