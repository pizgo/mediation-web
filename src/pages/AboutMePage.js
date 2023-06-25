import { motion } from "framer-motion";
import IntroductionText from "../components/IntroductionText";
import AboutMeMainText from "../components/AboutMe/AboutMeMainText";
import { introTextAboutMePage, titleAboutMePage } from "../utils/consts";

const AboutMePage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="section-container" id="about-me">
        <IntroductionText fetchTitle={introTextAboutMePage} header={titleAboutMePage}/>
        <AboutMeMainText/>
      </section>
    </motion.div>
  );
};

export default AboutMePage;
