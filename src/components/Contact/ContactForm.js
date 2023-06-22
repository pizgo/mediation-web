import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import { formSchema, validationSchema } from "../../utils/formData";
import Button from "../Button";
import InputText from "../InputText";
import Textarea from "../Textarea";
import Checkbox from "../Checkbox";

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
                <InputText id="name" name="name" placeholder="Imię i nazwisko"/>
                <InputText type="text" id="email" name="email" placeholder="Adres e-mail"/>
                <Textarea as="textarea" component="textarea" rows="8" id="message" name="message" placeholder="Treść wiadomości"/>
                <Checkbox/>
                <Button title="Wyślij" type="submit"/>
            </Form>
        </Formik>
    );
};

export default ContactForm;