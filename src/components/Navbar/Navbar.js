import { Link} from "react-router-dom";

const Navbar = () => {

return (
       <>
           <div className="container">
               <section className="nav">
                   <div className="nav__container">
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
               </section>
           </div>
       </>
    )
};

export default Navbar ;