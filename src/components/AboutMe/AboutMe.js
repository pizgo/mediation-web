import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const AboutMe = () => {
    const [aboutMeHeader, setAboutMeHeader] = useState(null);
    const [aboutMeMainText, setAboutMeMainText] = useState(null);
    const [aboutMeImg, setAboutMeImg] = useState(null)

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "plainText" && title == "AboutPageHeader"]{
            body
        }`)
            .then((data) => {
                setAboutMeHeader(data)
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "plainText" && title == "AboutPageMainText"]{
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
       <>
           <h2>O mnie</h2>
           <div>
               {aboutMeHeader &&
               aboutMeHeader.map((aboutTextHeader, index) => (
                       <h4 key={index}>
                           {aboutTextHeader.body}
                       </h4>
               ))}
           </div>
           <div>
               <div>
                   {aboutMeImg && aboutMeImg.map((img, index) => (
                           <img key={index}
                                src={img.picture.asset.url}
                                alt={img.picture.alt}/>
                   ))}
               </div>
               <div>
                   {aboutMeMainText &&
                   aboutMeMainText.map((aboutTextMain, index) => (
                           <p key={index}>
                               {aboutTextMain.body}
                           </p>
                   ))}
               </div>
           </div>
           <button>Poznaj moją ofertę</button>
       </>
    )
};

export default AboutMe ;