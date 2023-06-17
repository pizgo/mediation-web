import { useEffect, useState } from "react";
import sanityClient from "../../client.js";

const LandingPageAboutMediation = () => {
  const [landingHeadText, setLandingHeadText] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "plainText" && title == "Wstep na stronie glownej"]{
            body
        }`
      )
      .then((data) => {
        setLandingHeadText(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="intro">
      <div className="container">
        <div className="row introRow">
          {landingHeadText &&
            landingHeadText.map((headText, index) => (
              <p className="introText" key={index}>
                {headText.body}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPageAboutMediation;
