import { motion } from "framer-motion";
import IntroductionText from "../components/IntroductionText";
import Faq from "../components/AboutMediation/Faq";
import { introTextAboutMediationPage, titleAboutMediationPage } from "../utils/consts";

const AboutMediationPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="section-container" id="about-mediation">
        <IntroductionText fetchTitle={introTextAboutMediationPage} header={titleAboutMediationPage}/>
        <Faq/>
      </section>
    </motion.div>
  );
};

export default AboutMediationPage;
