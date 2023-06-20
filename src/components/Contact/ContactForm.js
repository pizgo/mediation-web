import React, {useState} from 'react';
import {Field, Form, Formik} from 'formik';
import { formSchema, validationSchema } from "../../utils/formData";
import * as Yuo from "yup"
import Button from "../Button";

const ContactForm = () => {


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInput((prevInputState) => ({
    //         ...prevInputState,
    //         [name]: value,
    //     }));
    // };
    const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let isAnyError = false;
    //     if (input.name.length === 0) {
    //         setNameError("Nie zapomnij o wpisaniu imienia i nazwiska");
    //     } else {
    //         setNameError();
    //     }
    //     //TODO error email
    //     //TODO sending form to the email, setting success to "Wiadomość została wysłana. Wkrórtce się z Tobą skontaktuję"
    };
    return (

        <Formik
            initialValues={formSchema}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={async (values, { resetForm }) => {
                await handleSubmit();
                resetForm();
            }}>
            <Form>
                <div className="mb-3">
                    <Field type="text"
                           name="name"
                           className="form-control mb-4"
                           placeholder="Imię i nazwisko"/>
                </div>
                <div className="mb-3">
                    <Field type="text"
                           name="email"
                           className="form-control mb-4"
                           placeholder="Adres e-mail"/>
                </div>
                <div className="mb-3">
                    <Field type="text"
                           name="message"
                           className="form-control mb-4"
                           placeholder="Treść wiadomości"/>
                </div>
                <div className="form-check">
                    <Field type="checkbox"
                               className="form-check-input"
                               value=""/>
                        <label
                            className="form-check-label ms-3 text-justify"
                            htmlFor="flexCheckDefault">
                            Zgadzam się na przetwarzanie moich danych osobowych przez
                            Izabela Kowalska i oświadczam, że zapoznałem/am się z
                            Polityką Prywatności
                        </label>
                </div>
                <Button title="Wyślij" type="submit"/>
            </Form>
        </Formik>

    );
};

export default ContactForm;