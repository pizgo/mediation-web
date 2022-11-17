import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const AboutMe = () => {
    const [aboutMeHeader, setAboutMeHeader] = useState(null);
    const [aboutMeMainText, setAboutMeMainText] = useState(null);
    const [aboutMeImg, setAboutMeImg] = useState(null)

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "plainText" && title == "Wstep na stronie o mnie"]{
            body
        }`)
            .then((data) => {
                setAboutMeHeader(data)
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "plainText" && title == "O mnie glowne"]{
            body
        }`)
            .then((data) => {
                setAboutMeMainText(data)
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "picture" && title == "AboutMeImg"]{
            picture{
                asset->{
                _id,
                url
                }},
                alt
        }`)
            .then((data) => {
                setAboutMeImg(data)
            })
            .catch(console.error);
    }, []);

return (
       <section className="aboutMe-section">
           <section className="introText">
               <div className="container-fluid">
                   {aboutMeHeader &&
                   aboutMeHeader.map((aboutTextHeader, index) => (
                       <p className="text text-center" key={index}>
                           {aboutTextHeader.body}</p>
                   ))}
               </div>
           </section>
           <div className="container">
               <div className="row header-row">
                   <h2 className="header">O mnie</h2>
               </div>
               <div className="row">
                   <div className="col-md-6" data-aos="fade-right" data-aos-duration="500">
                       <div>
                           {aboutMeImg && aboutMeImg.map((img, index) => (
                               <img className="img-fluid img-thumbnail mx-auto d-block mx-md-0 float-md-start landing-aboutMe-img"
                                   key={index}
                                    src={img.picture.asset.url}
                                    alt={img.picture.alt}/>
                           ))}
                       </div>
                   </div>
                   <div className="col-md-6" data-aos="fade-left" data-aos-duration="500">
                       {aboutMeMainText &&
                       aboutMeMainText.map((aboutTextMain, index) => (
                           <p className="basic-text landing-aboutMe-text mt-5" key={index}>
                               {aboutTextMain.body}
                           </p>
                       ))}
                   </div>
               </div>
                   <button className="button landing-aboutMe-btn mb-3 mb-md-0 mt-md-3">Poznaj moją ofertę</button>
           </div>

       </section>
    )
};

export default AboutMe ;