import { useEffect, useState} from "react";
import sanityClient from "../../client.js";

const LandingPageOffer = () => {

    const [headText, setHeadText] = useState(null);

    // useEffect(() => {
    //     sanityClient.fetch(
    //         // `*[_type == "plainText"] {
    //         //     body
    //         // }`)
    //         `*[_type == "post"]{
    //             title,
    //             body
    //         }`)
    //         .then((data) => setHeadText(data))
    //         .catch(console.error);
    // }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
        title,
        body
      }`
            )
            .then((data) => setHeadText(data))
            .catch(console.error);
    }, []);



    return (
       <>
        <section>
            <h4>{headText.title}</h4>
            <h3>{headText.body}</h3>
        </section>
       </>
    )
};

export default LandingPageOffer;