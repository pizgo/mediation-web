import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";

const LandingPageAboutMe = () => {
  const [landingAboutText, setLandingAboutText] = useState(null);
  const [landingAboutImg, setLandingAboutImg] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "plainText" && title == "O mnie na stronie glownej"]{
            body
        }`
      )
      .then((data) => {
        setLandingAboutText(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "picture" && title == "AboutMeLandingPage"]{
            picture{
                asset->{
                _id,
                url
                }},
                alt
        }`
      )
      .then((data) => {
        setLandingAboutImg(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="landing-aboutMe">
      <div className="container">
        <div className="row landing-aboutMe-row">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="header text-center text-md-start">O mnie</h2>
            <div className="landing-aboutMe-textContainer">
              {landingAboutText &&
                landingAboutText.map((aboutText, index) => (
                  <p
                    className="basic-text landing-aboutMe-text mt-5"
                    key={index}
                  >
                    {aboutText.body}
                  </p>
                ))}
              <Link className="offer-link link-dark" to="/oferta">
                <button className="button">Dowiedz się więcej</button>
              </Link>
            </div>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            {landingAboutImg &&
              landingAboutImg.map((img, index) => (
                <img
                  className="img-fluid img-thumbnail mx-auto d-block mx-md-0 float-md-end landing-aboutMe-img"
                  key={index}
                  src={img.picture.asset.url}
                  alt={img.picture.alt}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageAboutMe;
