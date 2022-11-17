import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const LandingPageAboutMediation = () => {
    const [landingHeadText, setLandingHeadText] = useState(null);


    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "plainText" && title == "Wstep na stronie glownej"]{
            body
        }`)
            .then((data) => {
                setLandingHeadText(data)
            })
            .catch(console.error);
    }, []);


    return (
        <section className="introText">
            <div className="container-fluid">
                {landingHeadText &&
                landingHeadText.map((headText, index) => (
                    <p className="text text-center" key={index}>
                        {headText.body}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default LandingPageAboutMediation;