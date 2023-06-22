import React from 'react';
import {ErrorMessage, Field} from "formik";

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

export default Checkbox;