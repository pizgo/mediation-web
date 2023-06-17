import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { motion } from "framer-motion";

const AboutMediation = () => {
  const [aboutMediation, setAboutMediation] = useState(null);
  const [FAQ, setFAQ] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "plainText" && title == "Wstep na stronie o mediacji"]{
            body
        }`
      )
      .then((data) => {
        setAboutMediation(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "faq"]{
            body,
            title
        }`
      )
      .then((data) => {
        setFAQ(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  const introText = (
    <>
      {aboutMediation &&
        aboutMediation.map((aboutMediationTextHeader, index) => (
          <p className="introText" key={index}>
            {aboutMediationTextHeader.body}
          </p>
        ))}
    </>
  );

  const faqAccordion = (
    <>
      {FAQ &&
        FAQ.map((text, index) => (
          <div className="accordion-item">
            <h2 className="accordion-header" id={"heading" + index}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + index}
                aria-expanded="true"
                aria-controls={"collapse" + index}
              >
                {text.title}
              </button>
            </h2>
            <div
              id={"collapse" + index}
              className="accordion-collapse collapse"
              aria-labelledby={"heading" + index}
              data-bs-parent="#accordionMediation"
            >
              <div className="accordion-body py-4 py-lg-5">{text.body}</div>
            </div>
          </div>
        ))}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <section className="aboutMediation-section">
        <section className="intro mt-5">
          <div className="container">
            <h3 className="header introHeader">
              Dlaczego warto zaufać mediacji?
            </h3>
            {introText}
          </div>
        </section>
        <div className="container">
          <div className="accordion accordion-flush" id="accordionMediation">
            {faqAccordion}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMediation;
