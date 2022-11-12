import photoBig from '../../assets/photoBig.png';
import {motion} from 'framer-motion';
const LandingPageHead= () => {

return (
       <section className="head-section">
               <div className="container">
                   <div className="row pt-2 pt-md-4 pt-lg-5">
                       <div className="col-md-7 col-lg-6">
                           <div className="head-img-container d-flex justify-content-center">
                               <img src={photoBig} alt='zdjecie'
                                    className="img-fluid img-head"/>
                           </div>
                       </div>
                       <div className="col-md-5 col-lg-6 pt-3 pt-md-0 d-flex flex-column justify-content-center">
                           <h2 className="display-4 head-name text-center text-md-start pb-1 pb-md-4">Izabela Kowalska</h2>
                           <h3 className="head-desc text-center text-md-start">Mediacje</h3>
                           <h3 className="head-desc text-center text-md-start">Negocjacje</h3>
                           <h3 className="head-desc text-center text-md-start">Rozwiązywanie sporów</h3>
                       </div>
                   </div>
               </div>
       </section>
    )
};

export default LandingPageHead ;