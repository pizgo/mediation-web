import { useEffect, useState } from "react";
import sanityClient from "../client"

const IntroductionText = (props) => {
    const [text, setText] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "plainText" && title == ${props.fetchName}]{body}`)
            .then((data) => {
                setText(data);
            })
            .catch(console.error);
    }, []);

    return (
        <section className="intro">
            <div className="container">
                <div className="row introRow">
                    <h3 className="header introHeader">{props.title}</h3>
                    {text &&
                        text.map((el, index) => (
                            <p className="introText p-4" key={index}>
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
