import { Link} from "react-router-dom";

const Navbar = () => {

return (
       <>
           <nav className="navbar navbar-expand-lg">
               <div className="container-fluid">
                   <ul className="nav__elements">
                       <Link className="nav__link" to="/">
                           Start
                       </Link>
                       <Link className="nav__link" to="/omnie">
                           O mnie
                       </Link>
                       <Link className="nav__link" to="/omediacjach">
                           O mediacjach
                       </Link>
                       <Link className="nav__link" to="/oferta">
                           Oferta
                       </Link>
                       <Link className="nav__link" to="/kontakt">
                           Kontakt
                       </Link>
                   </ul>
               </div>
           </nav>
       </>
    )
};

export default Navbar ;