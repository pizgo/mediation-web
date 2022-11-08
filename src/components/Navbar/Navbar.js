import { Link} from "react-router-dom";
import {List} from 'react-bootstrap-icons';


const Navbar = () => {

return (
       <>
           <nav className="navbar bg-white navbar-expand-lg">
               <div className="container-xxl py-sm-5">
                   <span className="navbar-brand">LOGO</span>
                   <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#navbarNav"
                           aria-controls="navbarNav"
                           aria-expanded="false"
                           aria-label="Toggle navigation">
                       <span className="toggler-icon top-bar"></span>
                       <span className="toggler-icon middle-bar"></span>
                       <span className="toggler-icon bottom-bar"></span>
                   </button>
                   <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                       <ul className="navbar-nav menu">
                           <li className="nav-item active">
                               <Link className="nav-link nav-link-color" aria-current="page" to="/">
                                   START
                               </Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/omnie">
                                   O MNIE
                               </Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/omediacjach">
                                   O MEDIACJACH
                               </Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/oferta">
                                   OFERTA
                               </Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/kontakt">
                                   KONTAKT
                               </Link>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </>
    )
};

export default Navbar ;