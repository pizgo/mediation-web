const Button = (props) => {

    return (
        <button className="button my-4" type="button" {...props}>{props.children}{props.title}</button>
    );
};

export default Button