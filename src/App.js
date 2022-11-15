import './App.css';
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import AboutMediation from "./components/AboutMediation/AboutMediation";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {

    useEffect(() => {
        AOS.init();
    }, [])

  return (
      <>
          <Navbar/>
          <div className="container-fluid">
            <Routes>
                <Route path="/mediation-web" element={<LandingPage/>}/>
                <Route path="/omnie" element={<AboutMe/>}/>
                <Route path="/omediacjach" element={<AboutMediation/>}/>
                <Route path="/oferta" element={<Offer/>}/>
                <Route path="/kontakt" element={<Contact/>}/>
            </Routes>
          </div>
          <Footer/>
      </>
  );
}

export default App;
