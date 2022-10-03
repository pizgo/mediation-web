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
        <>
            <div>
                {landingHeadText &&
                landingHeadText.map((headText, index) => (
                    <h3>
                        {headText.body}
                    </h3>
                ))}
            </div>
        </>
    );
};

export default LandingPageAboutMediation;