import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";
import AboutMediationPage from "./pages/AboutMediationPage";
import OfferPage from "./pages/OfferPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="content-container d-flex flex-column justify-content-between">
        <div className="container-fluid">
          <Routes>
            <Route path="/mediation-web" element={<LandingPage />} />
            <Route path="/omnie" element={<AboutMePage />} />
            <Route path="/omediacjach" element={<AboutMediationPage />} />
            <Route path="/oferta" element={<OfferPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
