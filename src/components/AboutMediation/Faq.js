import React, { useEffect, useState } from 'react';
import sanityClient from "../../client";

const Faq = () => {
    const [FAQ, setFAQ] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "faq"]{body, title}`)
            .then((data) => {
                setFAQ(data);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="container main-content">
            <div className="accordion accordion-flush" id="accordionMediation">
                {FAQ &&
                    FAQ.map((text, index) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={"heading" + index}>
                                <button
                                    className="accordion-button collapsed text-basic"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={"#collapse" + index}
                                    aria-expanded="true"
                                    aria-controls={"collapse" + index}>
                                    {text.title}
                                </button>
                            </h2>
                            <div
                                id={"collapse" + index}
                                className="accordion-collapse collapse"
                                aria-labelledby={"heading" + index}
                                data-bs-parent="#accordionMediation">
                                <div className="accordion-body text-basic py-lg-5">{text.body}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Faq;