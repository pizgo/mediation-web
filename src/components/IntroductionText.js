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

    const styleIntro = !props.title ?  "d-none" : "header introHeader"

    return (
        <section className="intro">
            <div className="container">
                <div className="row introRow">
                    <h3 className={styleIntro}>{props.title}</h3>
                    {text &&
                        text.map((el, index) => (
                            <p className="introText py-4" key={index}>
                                {el.body}
                            </p>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default IntroductionText;
