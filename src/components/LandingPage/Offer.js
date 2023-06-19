import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";

const Offer = () => {
  const [landingOfferText, setLandingOfferText] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "offer"]{
                title,
                mainImage{
                    asset-> {
                    _id,
                    url
                }},
                alt,
                body
        }`
      )
      .then((data) => {
        setLandingOfferText(data);
      })
      .catch(console.error);
  }, []);

  const OfferCard = () => {
    return (
        <div className="row pt-lg-5 mb-5">
          {landingOfferText &&
              landingOfferText.map((text, index) => (
                  <div className="col-xxl-4 col-md-6 my-3 col-offer">
                    <Link className="offer-link link-dark" to="/oferta">
                      <div
                          className="card offer-card px-3 pt-4 mb-4 mb-md-5 position-relative"
                          data-aos="fade-up"
                          data-aos-duration="500">
                    <span key={index}>
                      <div className="img-background position-absolute top-0 start-50 translate-middle "></div>
                      <img className="img-offer img-fluid
                           position-absolute top-0 start-50 translate-middle"
                           src={text.mainImage.asset.url}
                           alt={text.mainImage.alt}/>
                      <p className="card-title text-center fw-bold pt-4 pt-lg-5">
                        {text.title}
                      </p>
                      <p className="card-body basic-text">{text.body}</p>
                    </span>
                      </div>
                    </Link>
                  </div>
              ))}
        </div>
    )
  }

  return (
    <section className="landingPage-offer">
      <div className="container">
        <div className="row header-row my-5">
          <h3 className="header">Jak mogę ci pomóc?</h3>
        </div>
        <OfferCard/>
      </div>
    </section>
  );
};

export default Offer;
