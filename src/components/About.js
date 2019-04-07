import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../helper/ScrollToTop';

const About = props => {
    return (
        <div>
            <ScrollToTop />
            {props.pages.map(about => {
                if (about.title.rendered === 'About') {
                    return (
                        <div>
                            <div className="header">
                                <div className="header-inner">
                                    <h1>{about.acf.heading}</h1>
                                    <div
                                        className="text"
                                        dangerouslySetInnerHTML={{ __html: about.acf.heading_description }}
                                    />
                                </div>
                            </div>
                            <div className="about-company-section">
                                <div className="about-company-flex">
                                    <div className="about-company-info">
                                        <h3>{about.acf.about_company_title}</h3>
                                        <div
                                            className="text"
                                            dangerouslySetInnerHTML={{
                                                __html: about.acf.about_company_description,
                                            }}
                                        />
                                        <Link className="about-btn" to="/services">
                                            Our Services
                                        </Link>
                                    </div>
                                    <div className="about-company-media">
                                        <img
                                            className="about-company-img"
                                            src={about.acf.about_company_image.sizes.medium}
                                            alt=""
                                        />
                                        <div
                                            className="about-company-video"
                                            dangerouslySetInnerHTML={{
                                                __html: about.acf.about_company_video_link,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="about-aircraft-section">
                                <div className="about-aircraft-carousel">
                                    <img src={about.acf.about_aircraft_icon.url} alt="" width="150px" height="150px" />
                                    <h2>{about.acf.about_aircraft_title}</h2>
                                    <div
                                        className="text"
                                        dangerouslySetInnerHTML={{
                                            __html: about.acf.about_aircraft_description,
                                        }}
                                    />
                                </div>
                                <img
                                    className="about-aircraft-interactive"
                                    src={about.acf.about_aircraft_image.sizes.large}
                                    alt=""
                                />
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default About;
