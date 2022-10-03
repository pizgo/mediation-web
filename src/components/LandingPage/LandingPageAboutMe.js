import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const LandingPageAboutMe = () => {
    const [landingAboutText, setLandingAboutText] = useState(null);

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

export default LandingPageAboutMe;