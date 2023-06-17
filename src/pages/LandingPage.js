import Hero from "../components/LandingPage/Hero";
import AboutMediation from "../components/LandingPage/AboutMediation";
import Offer from "../components/LandingPage/Offer";
import AboutMe from "../components/LandingPage/AboutMe";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}>
        <Hero />
          <main>
              <AboutMediation />
              <Offer />
              <AboutMe />
          </main>
      </motion.div>
    </>
  );
};

export default LandingPage;
