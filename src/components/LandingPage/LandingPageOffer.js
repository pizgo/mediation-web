import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const LandingPageOffer = () => {
    const [landingHeadText, setLandingHeadText] = useState(null);
    const [landingAboutText, setLandingAboutText] = useState(null);

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

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "plainText" && title == "LPAbout"]{
            body
        }`)
            .then((data) => {
                setLandingAboutText(data)
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <div>
                {landingHeadText &&
                landingHeadText.map((headText, index) => (
                    <h3>
                        {headText.body}
                    </h3>
                ))}
            </div>
            <div>
                {landingAboutText &&
                landingAboutText.map((aboutText, index) => (
                    <h3>
                        {aboutText.body}
                    </h3>
                ))}
            </div>
        </>
    );


};

export default LandingPageOffer;