import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import { formSchema, validationSchema } from "../../utils/formData";
import Button from "../Button";

const ContactForm = () => {

    const handleSubmit = () => {
        console.log('wyslano')
    };
    return (

        <Formik
            initialValues={formSchema}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={async (values, { resetForm }) => {
                console.log(values)
                await handleSubmit();
                resetForm();
            }}>
            <Form>
                <div className="mb-3">
                    <Field type="text"
                           id="name"
                           name="name"
                           className="form-control mb-4"
                           placeholder="Imię i nazwisko"/>
                    <ErrorMessage name="name"/>
                </div>
                <div className="mb-3">
                    <Field type="email"
                           id="email"
                           name="email"
                           className="form-control mb-4"
                           placeholder="Adres e-mail"/>
                    <ErrorMessage name="email"/>
                </div>
                <div className="mb-3">
                    <Field type="text"
                           id="message"
                           name="message"
                           rows="8"
                           className="form-control mb-4"
                           placeholder="Treść wiadomości"/>
                    <ErrorMessage name="message"/>
                </div>
                <div className="form-check">
                        <label
                            className="form-check-label ms-3 text-justify"
                            htmlFor="flexCheckDefault">
                            <Field type="checkbox"
                                   name="consent"
                                   className="form-check-input"/>
                            Zgadzam się na przetwarzanie moich danych osobowych przez
                            Izabela Kowalska i oświadczam, że zapoznałem/am się z
                            Polityką Prywatności
                        </label>
                    <ErrorMessage name="consent"/>
                </div>
                <Button title="Wyślij" type="submit"/>
            </Form>
        </Formik>
    );
};

export default ContactForm;