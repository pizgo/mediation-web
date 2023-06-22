import React from 'react';
import { Field, ErrorMessage} from "formik";

const Textarea = (props) => (
    <div className="input-container">
        <Field type="text"
               component={props.component}
               rows={props.rows}
               as={props.as}
               id={props.id}
               name={props.name}
               className="form-control"
               placeholder={props.placeholder}
        />
        <ErrorMessage className="error-text" name={props.name} component="span"/>
    </div>
);

export default Textarea;