import React, { useEffect, useState } from 'react';
import sanityClient from "../client";

const ContactData = (props) => {
    const [contactText, setContactText] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "contact" && title == ${props.fetchTitle}]{body}`)
            .then((data) => {
                setContactText(data);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            {contactText && contactText.map((el, index) => (
            <a href={props.link} className={props.class} key={el.index}>
                {el.body}
            </a>
        ))}
        </>
    );
};

export default ContactData;