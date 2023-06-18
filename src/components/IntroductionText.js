import { useEffect, useState } from "react";
import sanityClient from "../client"

const IntroductionText = (props) => {
    const [text, setText] = useState(null);


    console.log(props.name)

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "plainText" && title == ${props.name}]{body}`)
            .then((data) => {
                setText(data);
            })
            .catch(console.error);
    }, []);

    return (
        <section className="intro">
            <div className="container">
                <div className="row introRow">
                    {text &&
                        text.map((el, index) => (
                            <p className="introText" key={index}>
                                {el.body}
                            </p>
                        ))}
                </div>
            </div>
            <h1>{props.text}</h1>
        </section>
    );
};

export default IntroductionText;