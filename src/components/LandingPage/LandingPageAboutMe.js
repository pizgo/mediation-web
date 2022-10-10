import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const LandingPageAboutMe = () => {
    const [landingAboutText, setLandingAboutText] = useState(null);
    const [landingAboutImg, setLandingAboutImg] = useState(null);

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

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "picture" && title == "AboutMeLandingPage"]{
            picture{
                asset->{
                _id,
                url
                }},
                alt
        }`)
            .then((data) => {
                setLandingAboutImg(data)
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <div>
                <div>
                    <h2>O mnie</h2>
                    <div>
                        {landingAboutText &&
                        landingAboutText.map((aboutText, index) => (
                            <h3>
                                {aboutText.body}
                            </h3>
                        ))}
                    </div>
                </div>
                <div>
                    {landingAboutImg && landingAboutImg.map((img, index) => (
                        <span key={index}>
                               <img src={img.picture.asset.url}
                                    alt={img.picture.alt}/>
                           </span>
                    ))}
                </div>
            </div>
            <button>Dowiedz się więcej</button>
        </>
    );




};

export default LandingPageAboutMe;