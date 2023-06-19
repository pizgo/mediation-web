import { motion } from "framer-motion";
import IntroductionText from "../components/IntroductionText";
import AboutMeMainText from "../components/AboutMe/AboutMeMainText";

const AboutMePage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="aboutMe-section">
        <IntroductionText fetchName='"Wstep na stronie o mnie"' title="O mnie"/>
        <AboutMeMainText/>
      </section>
    </motion.div>
  );
};

export default AboutMePage;
