import { useEffect, useState} from "react";
import sanityClient from "../../client.js";
import {Link} from "react-router-dom";

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
                <div className="row landing-aboutMe-row">
                    <div className="col-md-6">
                        <h2 className="fw-bold">O mnie</h2>
                        <div>
                            {landingAboutText &&
                            landingAboutText.map((aboutText, index) => (
                                <p className="basic-text mt-5" key={index}>
                                    {aboutText.body}
                                </p>
                            ))}
                        </div>
                        <Link className="offer-link link-dark" to="/oferta">
                            <button className="button mt-3">Dowiedz się więcej</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        {landingAboutImg && landingAboutImg.map((img, index) => (
                                   <img className="img-fluid img-thumbnail float-end" key={index}
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