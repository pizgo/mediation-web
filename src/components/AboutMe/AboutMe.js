import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const AboutMe = () => {
    const [aboutMeHeader, setAboutMeHeader] = useState(null);
    const [aboutMeMainText, setAboutMeMainText] = useState(null);

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

return (
       <>
           <h2>O mnie</h2>
           <div>
               {aboutMeHeader &&
               aboutMeHeader.map((aboutTextHeader, index) => (
                   <span key={index}>
                       <h4>
                           {aboutTextHeader.body}
                       </h4>
                   </span>
               ))}
           </div>
           <div>
               <div>
                   {aboutMeMainText &&
                   aboutMeMainText.map((aboutTextMain, index) => (
                       <span key={index}>
                           <p>
                               {aboutTextMain.body}
                           </p>
                       </span>
                   ))}
               </div>
           </div>
           <button>Poznaj moją ofertę</button>
       </>
    )
};

export default AboutMe ;