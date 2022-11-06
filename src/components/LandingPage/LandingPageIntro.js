import introPicture from '../../assets/introPictureCut.png';
const LandingPageIntro= () => {

return (
       <section className="intro-section">
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                        <div className="intro-img-container d-flex justify-content-center">
                            <img src={introPicture} alt='zdjecie'
                                 className="img-fluid img-intro "/>
                        </div>
                   </div>
                   <div className="col-md-6">
                       {/*<h2 className="display-4">*/}
                       {/*    <span className="display-4-intro">Izabela Starszewska</span>*/}
                       {/*    <span className="display-4-desc">Mediacje</span>*/}
                       {/*    <span className="display-4-desc">Negocjacje</span>*/}
                       {/*    <span className="display-4-desc">Rozwiązywanie sporów</span>*/}
                       {/*</h2>*/}
                       <h1 className="display-3 intro-name">Izabela Starszewska</h1>
                       <h1 className="intro-desc">Mediacje</h1>
                       <h1 className="intro-desc">Negocjacje</h1>
                       <h1 className="intro-desc">Rozwiązywanie sporów</h1>
                   </div>
               </div>
           </div>
       </section>
    )
};

export default LandingPageIntro ;