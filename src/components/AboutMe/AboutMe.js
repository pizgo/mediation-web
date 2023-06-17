import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [aboutMeHeader, setAboutMeHeader] = useState(null);
  const [aboutMeMainText, setAboutMeMainText] = useState(null);
  const [aboutMeImg, setAboutMeImg] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "plainText" && title == "Wstep na stronie o mnie"]{
            body
        }`
      )
      .then((data) => {
        setAboutMeHeader(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "plainText" && title == "O mnie glowne"]{
            body
        }`
      )
      .then((data) => {
        setAboutMeMainText(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "picture" && title == "AboutMeImg"]{
            picture{
                asset->{
                _id,
                url
                }},
                alt
        }`
      )
      .then((data) => {
        setAboutMeImg(data);
      })
      .catch(console.error);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <section className="aboutMe-section">
        <section className="intro mt-5">
          <div className="container">
            <h3 className="header introHeader">O mnie</h3>
            {aboutMeHeader &&
              aboutMeHeader.map((aboutTextHeader, index) => (
                <p className="introText" key={index}>
                  {aboutTextHeader.body}
                </p>
              ))}
          </div>
        </section>
        <div className="container">
          <div className="row aboutMe-row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div>
                {aboutMeImg &&
                  aboutMeImg.map((img, index) => (
                    <img
                      className="img-fluid img-thumbnail mx-auto d-block mx-md-0 float-md-start landing-aboutMe-img"
                      key={index}
                      src={img.picture.asset.url}
                      alt={img.picture.alt}
                    />
                  ))}
              </div>
            </div>
            <div
              className="col-md-6 mt-5 mt-md-0"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              {aboutMeMainText &&
                aboutMeMainText.map((aboutTextMain, index) => (
                  <p className="basic-text" key={index}>
                    {aboutTextMain.body}
                  </p>
                ))}
              <button className="button my-3">Poznaj moją ofertę</button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMe;
