import photoBig from "../../assets/photoBig.png";

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="row hero-row pt-2 pt-md-4 pt-lg-5">
          <div className="col-sm-6 ps-lg-5">
            <div className="hero-imgBox d-flex justify-content-center">
              <img
                src={photoBig}
                alt="zdjecie mediatorki Izabeli Kowalskiej"
                className="img-fluid img-hero"/>
            </div>
          </div>
          <div className="col-sm-6 pt-3 pt-md-0 d-flex flex-column justify-content-center">
            <h3 className="heroName text-center text-sm-start pb-1 ">
                <em>Izabela Kowalska</em>
            </h3>
            <p className="heroDesc text-center text-sm-start"><em>Mediacje</em></p>
            <p className="heroDesc text-center text-sm-start"><em>Negocjacje</em></p>
            <p className="heroDesc text-center text-sm-start"><em>Rozwiązywanie sporów</em></p>
          </div>
        </div>
    </header>
  );
};

export default Hero;
