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
                <div className="my-4 position-relative">
                    <Field type="text"
                           id="name"
                           name="name"
                           className="form-control mb-4"
                           placeholder="Imię i nazwisko"/>
                    <ErrorMessage className="error-text" name="name" component="span"/>
                </div>
                <div className="my-4 position-relative">
                    <Field type="email"
                           id="email"
                           name="email"
                           className="form-control mb-4"
                           placeholder="Adres e-mail"/>
                    <ErrorMessage className="error-text" name="email"component="span"/>
                </div>
                <div className="mb-y position-relative">
                    <Field type="text"
                           id="message"
                           name="message"
                           rows="8"
                           className="form-control mb-4"
                           placeholder="Treść wiadomości"/>
                    <ErrorMessage className="error-text" name="message"component="span"/>
                </div>
                <div className="position-relative">
                    <div className="form-check ps-3">
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault">
                            <Field type="checkbox"
                                   name="consent"
                                   className="form-check-input"/>
                            <p className="text-justify ms-2">Zgadzam się na przetwarzanie moich danych osobowych przez
                                Izabela Kowalska i oświadczam, że zapoznałem/am się z
                                Polityką Prywatności</p>
                        </label>
                    </div>
                    <ErrorMessage className="error-consent" name="consent" component="span"/>
                </div>
                <Button title="Wyślij" type="submit"/>
            </Form>
        </Formik>
    );
};

export default ContactForm;