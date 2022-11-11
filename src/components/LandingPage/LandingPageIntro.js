import photoBig from '../../assets/photoBig.png';


const LandingPageIntro= () => {

return (
       <section className="intro-section">
           <div className="container">
               {/*<div className="row d-flex justify-content-end">*/}
               {/*        <div className="col-md-6">*/}
               {/*            <div className="intro-img-container d-flex justify-content-center">*/}
               {/*                <img src={photoBig} alt='zdjecie'*/}
               {/*                     className="img-fluid img-intro "/>*/}
               {/*            </div>*/}
               {/*        </div>*/}
               {/*    <div className="col-5 d-flex flex-column justify-content-center">*/}
               {/*        <h2 className="display-5 intro-name">Izabela Starszewska</h2>*/}
               {/*        <h3 className="display- intro-desc">Mediacje</h3>*/}
               {/*        <h3 className="intro-desc">Negocjacje</h3>*/}
               {/*        <h3 className="intro-desc">Rozwiązywanie sporów</h3>*/}
               {/*    </div>*/}
               {/*</div>*/}
               <div className="row pt-2 pt-md-4 pt-lg-5">
                   <div className="col-md-7 col-lg-6">
                       <div className="intro-img-container d-flex justify-content-center">
                           <img src={photoBig} alt='zdjecie'
                                className="img-fluid img-intro "/>
                       </div>
                   </div>
                   <div className="col-md-5 col-lg-6 pt-3 pt-md-0 d-flex flex-column justify-content-center">
                       <h2 className="display-4 intro-name text-center text-md-left pb-1 pb-md-4">Izabela Kowalska</h2>
                       <h3 className="intro-desc text-center text-md-left">Mediacje</h3>
                       <h3 className="intro-desc text-center text-md-left">Negocjacje</h3>
                       <h3 className="intro-desc text-center text-md-left">Rozwiązywanie sporów</h3>
                   </div>
               </div>
           </div>
       </section>
    )
};

export default LandingPageIntro ;