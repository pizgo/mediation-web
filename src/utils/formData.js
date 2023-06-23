import * as Yup from 'yup';

const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{1,3})+$/;

export const formSchema = {
    name: "",
    email: "",
    message: "",
    consent: "",
}

export const validationSchema =
    Yup.object().shape({
        name: Yup.string()
            .min(3, 'Podane imię i nazwisko jest za krótkie')
            .max(50, 'Podane imię i nazwisko jest za długie')
            .required('Uzupełnij pole'),
        email: Yup.string()
            .matches(emailRegex, 'Podany adres jest niepoprawny')
            .required("Uzupełnij pole"),
        message: Yup.string()
            .min(10, 'Wiadomośc jest za krótka')
            .max(2000, 'Wiadomość jest za długa')
            .required('Uzupełnij pole'),
        consent: Yup.string()
            .required('Zaznacz zgodę')
    });