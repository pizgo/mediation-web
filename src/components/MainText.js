import { useEffect, useState } from "react";
import sanityClient from "../client"

const MainText = ({name}) => {
    const [text, setText] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "plainText" && title == ${name}]{body}`)
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
        </section>
    );
};

export default MainText;
