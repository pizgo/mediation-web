import { motion } from "framer-motion";
import IntroductionText from "../components/IntroductionText";
import Faq from "../components/AboutMediation/Faq";

const AboutMediationPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}>
      <section className="aboutMediation-section mt-5">
        <IntroductionText fetchName='"Wstep na stronie o mediacji"' title="Dlaczego warto zaufać mediacji?"/>
        <Faq/>
      </section>
    </motion.div>
  );
};

export default AboutMediationPage;
