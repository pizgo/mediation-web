import { NavLink} from "react-router-dom";

const Navbar = () => {

return (
       <>
           <div className="container">
               <section className="nav">
                   <div className="nav__container">
                       <ul className="nav__elements">
                           <NavLink className="nav__link" to="/">
                               Start
                           </NavLink>
                           <NavLink className="nav__link" to="/aboutme">
                               O mnie
                           </NavLink>
                           <NavLink className="nav__link" to="/aboutmediation">
                               O mediacjach
                           </NavLink>
                           <NavLink className="nav__link" to="/offer">
                               Oferta
                           </NavLink>
                           <NavLink className="nav__link" to="/contact">
                               Kontakt
                           </NavLink>
                       </ul>
                   </div>
               </section>
           </div>
       </>
    )
};

export default Navbar ;