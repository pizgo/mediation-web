import LandingPageHead from "./LandingPageHead";
import LandingPageAboutMediation from "./LandingPageAboutMediation";
import LandingPageOffer from "./LandingPageOffer";
import LandingPageAboutMe from "./LandingPageAboutMe";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <LandingPageHead />
        <LandingPageAboutMediation />
        <LandingPageOffer />
        <LandingPageAboutMe />
      </motion.div>
    </>
  );
};

export default LandingPage;
