const Button = (props) => {

    return (
        <button className="button" type="button" {...props}>{props.children}{props.title}</button>
    );
};

export default Button