import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button";
import sanityClient from "../../client";

const AboutMeMainText = () => {
    const [aboutMeMainText, setAboutMeMainText] = useState(null);
    const [aboutMeImg, setAboutMeImg] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "plainText" && title == "O mnie glowne"]{
            body
        }`
            )
            .then((data) => {
                setAboutMeMainText(data);
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "picture" && title == "AboutMeImg"]{
            picture{
                asset->{
                _id,
                url
                }},
                alt
        }`
            )
            .then((data) => {
                setAboutMeImg(data);
            })
            .catch(console.error);
    }, []);
    return (
        <div className="container">
            <div className="row aboutMe-row">
                <div
                    className="col-md-6"
                    data-aos="fade-right"
                    data-aos-duration="500">
                    <div>
                        {aboutMeImg &&
                            aboutMeImg.map((img, index) => (
                                <img
                                    className="img-fluid img-thumbnail mx-auto d-block mx-md-0 float-md-start landing-aboutMe-img"
                                    key={index}
                                    src={img.picture.asset.url}
                                    alt={img.picture.alt}
                                />
                            ))}
                    </div>
                </div>
                <div
                    className="col-md-6 mt-5 mt-md-0"
                    data-aos="fade-left"
                    data-aos-duration="500">
                    {aboutMeMainText &&
                        aboutMeMainText.map((aboutTextMain, index) => (
                            <p className="basic-text" key={index}>
                                {aboutTextMain.body}
                            </p>
                        ))}
                    <Link className="offer-link link-dark" to="/oferta">
                        <Button title="Poznaj moją ofertę"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMeMainText;