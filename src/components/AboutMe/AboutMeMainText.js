import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button";
import sanityClient from "../../client";
import {aboutMePageImg, mainTextAboutMePage} from "../../utils/consts";

const AboutMeMainText = () => {
    const [aboutMeMainText, setAboutMeMainText] = useState(null);
    const [aboutMeImg, setAboutMeImg] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "plainText" && title == ${mainTextAboutMePage}]{body}`)
            .then((data) => {
                setAboutMeMainText(data);
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "picture" && title == ${aboutMePageImg}]{
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
        <div className="container p-4 py-xxl-5">
            <div className="row section-row mb-0">
                <div
                    className="col-lg-6"
                    data-aos="fade-right"
                    data-aos-duration="500">
                    <div>
                        {aboutMeImg &&
                            aboutMeImg.map((img, index) => (
                                <img
                                    className="img-fluid img-thumbnail mx-auto d-block mx-lg-0 float-lg-start landing-aboutMe-img"
                                    key={index}
                                    src={img.picture.asset.url}
                                    alt={img.picture.alt}
                                />
                            ))}
                    </div>
                </div>
                <div
                    className="col-lg-6 mt-5 mt-lg-0"
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