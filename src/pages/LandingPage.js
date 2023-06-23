import Hero from "../components/LandingPage/Hero";
import IntroductionText from "../components/IntroductionText";
import Offer from "../components/LandingPage/Offer";
import AboutMe from "../components/LandingPage/AboutMe";
import { motion } from "framer-motion";
import {introTextLandingPage} from "../utils/consts";

const LandingPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}>
              <Hero />
              <main>
                  <IntroductionText fetchTitle={introTextLandingPage}/>
                  <Offer />
                  <AboutMe />
              </main>
      </motion.div>
    </>
  );
};

export default LandingPage;
