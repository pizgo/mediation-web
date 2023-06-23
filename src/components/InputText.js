import React from 'react';
import { Field, ErrorMessage } from "formik";

const InputText = (props) => (
    <div className="mb-4">
        <Field type="text"
               id={props.id}
               name={props.name}
               className="form-control"
               placeholder={props.placeholder}/>
        <ErrorMessage className="error-text" name={props.name} component="span"/>
    </div>
);

export default InputText;