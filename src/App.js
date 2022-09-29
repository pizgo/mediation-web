import './App.css';
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import AboutMediation from "./components/AboutMediation/AboutMediation";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <>
          <Navbar/>
          <div className="container">
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/omnie" element={<AboutMe/>}/>
                <Route path="/omediacjach" element={<AboutMediation/>}/>
                <Route path="/oferta" element={<Offer/>}/>
                <Route path="/kontakt" element={<Contact/>}/>
            </Routes>
          </div>
      </>

  );
}

export default App;
