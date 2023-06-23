import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formSchema, validationSchema } from "../../utils/formData";
import Button from "../Button";
import InputText from "../InputText";

const ContactForm = () => {

    const Textarea = () => (
        <div className="mb-4">
            <Field type="text"
                   component="textarea"
                   rows="8"
                   as="textarea"
                   id="message"
                   name="message"
                   className="form-control"
                   placeholder="Treść wiadomości"/>
            <ErrorMessage className="error-text" name="message" component="span"/>
        </div>
    );

    const Checkbox = () => {
        return (
            <div className="mb-4">
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
                <ErrorMessage className="error-text" name="consent" component="span"/>
            </div>
        );
    };

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
                <InputText id="name" name="name" placeholder="Imię i nazwisko" />
                <InputText type="text" id="email" name="email" placeholder="Adres e-mail" />
                <Textarea />
                <Checkbox />
                <Button title="Wyślij" type="submit" />
            </Form>
        </Formik>
    );
};

export default ContactForm;