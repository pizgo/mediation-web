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
        <>
            <div>
                <h2>
                    Jak mogę ci pomóc?
                </h2>
                <div>
                    {landingOfferText &&
                    landingOfferText.map((text, index) => (
                        <div>
                  <span key={index}>
                      <p>{text.title}</p>
                    <img
                        src={text.mainImage.asset.url}
                        alt={text.mainImage.alt}
                    />
                    <span>
                      <p>
                        {text.body}
                      </p>
                    </span>
                  </span>
                        </div>
                    ))}
                </div>
                <button>Dowiedz się więcej</button>
            </div>

        </>
    );


};

export default LandingPageOffer;