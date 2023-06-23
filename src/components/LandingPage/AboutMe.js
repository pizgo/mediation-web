import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import Button from "../Button";
import { aboutMeLandingPage, aboutMeLandingPageImg } from "../../utils/consts";

const AboutMe = () => {
  const [landingAboutMeText, setLandingAboutMeText] = useState(null);
  const [landingAboutMeImg, setLandingAboutMeImg] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "plainText" && title == ${aboutMeLandingPage}]{body}`)
      .then((data) => {
        setLandingAboutMeText(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "picture" && title == ${aboutMeLandingPageImg}]{picture{asset->{
                _id,
                url
                }},
                alt}`)
      .then((data) => {
        setLandingAboutMeImg(data);
      })
      .catch(console.error);
  }, []);

  const AboutMeText = () => {
    return (
        <>
          {landingAboutMeText &&
              landingAboutMeText.map((aboutText, index) => (
                  <p className="text-basic my-4 my-md-5"
                     key={index}>
                    {aboutText.body}
                  </p>
              ))}
        </>
    );
  };

  const AboutMeImg = () => {
    return (
        <div className="d-none d-md-block col-md-6" data-aos="fade-left" data-aos-duration="500">
          {landingAboutMeImg &&
              landingAboutMeImg.map((img, index) => (
                  <img
                      className="img-fluid img-thumbnail mx-auto d-block mx-md-0 float-md-end aboutMe-img"
                      key={index}
                      src={img.picture.asset.url}
                      alt={img.picture.alt}/>
              ))}
        </div>
    );
  };

  return (
    <section className="landing-aboutMe">
      <div className="container p-4 py-xxl-5">
        <div className="row row-position mb-0">
          <div className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="500">
            <h3 className="text-center text-md-start">O mnie</h3>
            <div className="landing-aboutMe-textContainer">
              <AboutMeText/>
              <Link className="offer-link link-dark" to="/omnie">
                <Button title="Dowiedz się więcej"/>
              </Link>
            </div>
          </div>
          <AboutMeImg/>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
