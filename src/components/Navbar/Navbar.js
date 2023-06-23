import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import {useState} from "react";

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClickTrue = () => {
    setIsClicked(true)
  };
  const handleClickFalse = () => {
    setIsClicked(false)
  };

  const styles = isClicked  ?
      "navbar-container collapse navbar-collapse d-none d-lg-block d-lg-flex justify-content-end" :
      "navbar-container collapse navbar-collapse d-lg-flex justify-content-end";

    return (
        <>
          <nav className="navbar bg-white navbar-expand-lg">
            <div className="container">
              <Link to="/mediation-web" className="navbar-brand">
                <img src={logo} role="button" className="logo"></img>
              </Link>
              <button
                  className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={handleClickFalse}>
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
              </button>
              <div
                  className={styles}
                  id="navbarNav">
                <ul className="navbar-nav menu">
                  <li className="nav-item active">
                    <Link
                        className="nav-link nav-link-color"
                        aria-current="page"
                        to="/mediation-web"
                        onClick={handleClickTrue}>
                      START
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/omnie" onClick={handleClickTrue}>
                      O MNIE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/omediacjach" onClick={handleClickTrue}>
                      O MEDIACJACH
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/oferta" onClick={handleClickTrue}>
                      OFERTA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/kontakt" onClick={handleClickTrue}>
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

export default Navbar;
