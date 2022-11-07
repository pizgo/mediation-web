import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const LandingPageAboutMediation = () => {
    const [landingHeadText, setLandingHeadText] = useState(null);


    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "plainText" && title == "LPHead"]{
            body
        }`)
            .then((data) => {
                setLandingHeadText(data)
            })
            .catch(console.error);
    }, []);


    return (
        <section className="introText-section">
            <div className="container-fluid introText-container">
                {landingHeadText &&
                landingHeadText.map((headText, index) => (
                    <p className="text" key={index}>
                        {headText.body}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default LandingPageAboutMediation;