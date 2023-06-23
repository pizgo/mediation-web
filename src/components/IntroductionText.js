import { useEffect, useState } from "react";
import sanityClient from "../client"

const IntroductionText = (props) => {
    const [text, setText] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "plainText" && title == ${props.fetchTitle}]{body}`)
            .then((data) => {
                setText(data);
            })
            .catch(console.error);
    }, []);

    const styleIntro = !props.header ?  "d-none" : "header-intro"

    return (
        <section className="intro bg-primary w-100">
            <div className="container">
                <div className="row introRow">
                    <h3 className={styleIntro}>{props.header}</h3>
                    {text &&
                        text.map((el, index) => (
                            <p className="text-intro py-4" key={index}>
                                {el.body}
                            </p>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default IntroductionText;
