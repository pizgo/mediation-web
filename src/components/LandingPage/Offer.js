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
                body}`)
      .then((data) => {
        setLandingOfferText(data);
      })
      .catch(console.error);
  }, []);

  const OfferCard = () => {
    return (
        <div className="row">
          {landingOfferText &&
              landingOfferText.map((text, index) => (
                  <div className="col-xl-4 col-md-6 my-3 px-md-3 px-xl-4 px-xxl-5">
                    <Link className="link-dark" to="/oferta">
                      <div
                          className="card offer-card px-3 pt-4 mb-4 mb-md-4 position-relative"
                          data-aos="fade-up"
                          data-aos-duration="500">
                        <span key={index}>
                            <div className="offer-imgBackground position-absolute top-0 start-50 translate-middle "></div>
                            <img className="offer-img img-fluid
                                 position-absolute top-0 start-50 translate-middle"
                                 src={text.mainImage.asset.url}
                                 alt={text.mainImage.alt}/>
                            <h5 className="card-title text-center pt-4 pt-lg-5">
                              {text.title}
                            </h5>
                            <p className="card-body text-basic">{text.body}</p>
                        </span>
                      </div>
                    </Link>
                  </div>
              ))}
        </div>
    );
  };

  return (
    <section className="landingPage-offer">
      <div className="container p-4 py-xxl-5">
        <div className="col">
          <div className="row row-position text-center">
            <h3 className="">Jak mogę ci pomóc?</h3>
          </div>
          <OfferCard/>
        </div>
      </div>
    </section>
  );
};

export default Offer;
