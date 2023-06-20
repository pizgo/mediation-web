import React from 'react';
import { Field, ErrorMessage, getIn} from "formik";

// function getStyles(error, fieldName) {
//     console.log(error, fieldName)
//     if (getIn(error, fieldName)) {
//         return {
//             border: '1px solid red'
//         }
//     }
// };
//
// function CustomInput({ field, form: { errors } }) {
//     return (
//         <div className="input-container">
//             <input {...field} className="form-control" style={getStyles(errors, field.name)} />
//             <ErrorMessage className="error-text" name={field.name} component="span"/>
//         </div>
//     )
// }

const InputText = (props) => (
    <div className="input-container">
        <Field type="text"
               id={props.id}
               name={props.name}
               className="form-control"
               placeholder={props.placeholder}
               />
        <ErrorMessage className="error-text" name={props.name} component="span"/>
    </div>
);

export default InputText;