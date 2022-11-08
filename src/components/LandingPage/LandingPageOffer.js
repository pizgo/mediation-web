import {useEffect, useState} from "react";
import sanityClient from "../../client.js";

const LandingPageOffer = () => {
    const [landingOfferText, setLandingOfferText] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "offer"]{
                title,
                mainImage{
                    asset-> {
                    _id,
                    url
                }},
                alt,
                body
        }`)
            .then((data) => {
                setLandingOfferText(data)
            })
            .catch(console.error);
    }, []);

    return (
        <section className="landingPage-offer">
            <div className="container">
                <div className="row text-center my-5">
                     <h2 className="fw-bold my-3">Jak mogę ci pomóc?</h2>
                </div>
                <div className="row pt-5">
                    {landingOfferText &&
                    landingOfferText.map((text, index) => (
                        <div className="col-lg-4 px-5">
                            <div className="card shadow px-3 pt-4">
                                <span key={index}>
                                    <p className="card-title text-center fw-bold pt-5">{text.title}</p>
                                    {/*<img*/}
                                    {/*    src={text.mainImage.asset.url}*/}
                                    {/*    alt={text.mainImage.alt}/>*/}
                                    <p className="card-body">{text.body}</p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn button btn-secondary my-5">Dowiedz się więcej</button>
            </div>

        </section>
    );


};

export default LandingPageOffer;