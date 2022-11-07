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
                   <div className="col-md-6 d-flex flex-column justify-content-center">
                       <h1 className="display-4 intro-name">Izabela Starszewska</h1>
                       <h2 className="intro-desc">Mediacje</h2>
                       <h2 className="intro-desc">Negocjacje</h2>
                       <h2 className="intro-desc">Rozwiązywanie sporów</h2>
                   </div>
               </div>
           </div>
       </section>
    )
};

export default LandingPageIntro ;