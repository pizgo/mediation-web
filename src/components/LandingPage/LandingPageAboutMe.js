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
        <section className="landing-aboutMe">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2 className="fw-bold">O mnie</h2>
                        <div>
                            {landingAboutText &&
                            landingAboutText.map((aboutText, index) => (
                                <p className="basic-text" key={index}>
                                    {aboutText.body}
                                </p>
                            ))}
                        </div>
                        <button>Dowiedz się więcej</button>
                    </div>
                    <div className="col-md-6">
                        {landingAboutImg && landingAboutImg.map((img, index) => (
                                   <img className="img-fluid pl-5" key={index}
                                        src={img.picture.asset.url}
                                        alt={img.picture.alt}/>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );




};

export default LandingPageAboutMe;