import photoBig from "../../assets/photoBig.png";

const Hero = () => {
  return (
    <header className="hero-section">
        <div className="row pt-2 pt-md-4 pt-lg-5">
          <div className="col-sm-6 ps-5">
            <div className="d-flex justify-content-center">
              <img
                src={photoBig}
                alt="zdjecie mediatorki Izabeli Kowalskiej"
                className="img-fluid img-hero"/>
            </div>
          </div>
          <div className="col-sm-6 pt-3 pt-md-0 d-flex flex-column justify-content-center">
            <h3 className="hero-name text-center text-sm-start pb-1 ">
              Izabela Kowalska
            </h3>
            <p className="hero-desc text-center text-sm-start">Mediacje</p>
            <p className="hero-desc text-center text-sm-start">Negocjacje</p>
            <p className="hero-desc text-center text-sm-start">Rozwiązywanie sporów</p>
          </div>
        </div>
    </header>
  );
};

export default Hero;
