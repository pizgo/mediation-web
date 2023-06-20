import photoBig from "../../assets/photoBig.png";

const Hero = () => {
  return (
    <header className="hero-section">
        <div className="row pt-2 pt-md-4 pt-lg-5">
          <div className="col-md-7 col-lg-6">
            <div className="d-flex justify-content-center">
              <img
                src={photoBig}
                alt="zdjecie mediatorki Izabeli Kowalskiej"
                className="img-fluid img-hero"/>
            </div>
          </div>
          <div
            className="col-md-5 col-lg-6 pt-3 pt-md-0 d-flex flex-column justify-content-center">
            <h3 className="hero-name text-center text-md-start pb-1 pb-md-4">
              Izabela Kowalska
            </h3>
            <p className="hero-desc text-center text-md-start">Mediacje</p>
            <p className="hero-desc text-center text-md-start">Negocjacje</p>
            <p className="hero-desc text-center text-md-start">Rozwiązywanie sporów</p>
          </div>
        </div>
    </header>
  );
};

export default Hero;
