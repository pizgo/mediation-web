import introPicture from '../../assets/introPictureCut.png';
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
               <div className="row">
                   {/*<div className="col-md-8">*/}
                   {/*    <div className="intro-img-container d-flex justify-content-center">*/}
                   {/*        <img src={photoBig} alt='zdjecie'*/}
                   {/*             className="img-fluid img-intro "/>*/}
                   {/*    </div>*/}
                   {/*</div>*/}
                   <div className="col-md-4 d-flex flex-column justify-content-center">
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