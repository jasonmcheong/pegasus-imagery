import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = props => {
    return (
        <div>
            {props.parallax.map(para => {
                return (
                    <div>
                        {props.pages.map(home => {
                            if (home.title.rendered === 'Home') {
                                return (
                                    <div>
                                        <Parallax
                                            bgImage={para.acf.para_mission.url}
                                            contentClassName="background"
                                            strength={500}
                                        >
                                            <div className="section-flex" style={{ height: '100vh' }}>
                                                <div className="section-content">
                                                    <h2>{home.acf.para_mission_title}</h2>
                                                    <p>{home.acf.para_mission_desc}</p>
                                                    <Link className="homepage-link" to="/about">
                                                        Our Mission{' '}
                                                        <FontAwesomeIcon
                                                            style={{ paddingTop: '1px' }}
                                                            icon="angle-double-right"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="section-img">
                                                    <img src={home.acf.para_mission_img.url} alt="" />
                                                </div>
                                            </div>
                                        </Parallax>
                                        <Parallax
                                            bgImage={para.acf.para_aircraft.url}
                                            contentClassName="background"
                                            strength={1500}
                                        >
                                            <div className="section-flex" style={{ height: '100vh' }}>
                                                <div className="section-img">
                                                    <img src={home.acf.para_aircraft_img.url} alt="" />
                                                </div>
                                                <div className="section-content">
                                                    <h2>{home.acf.para_aircraft_title}</h2>
                                                    <p>{home.acf.para_aircraft_desc}</p>
                                                    <Link className="homepage-link" to="/about">
                                                        Our Aircraft{' '}
                                                        <FontAwesomeIcon
                                                            style={{ paddingTop: '1px' }}
                                                            icon="angle-double-right"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </Parallax>
                                        <Parallax
                                            bgImage={para.acf.para_services.url}
                                            contentClassName="background"
                                            strength={1500}
                                        >
                                            <div className="section-flex" style={{ height: '100vh' }}>
                                                <div className="section-content">
                                                    <h2>{home.acf.para_services_title}</h2>
                                                    <p>{home.acf.para_services_desc}</p>
                                                    <Link className="homepage-link" to="/services">
                                                        Our Services{' '}
                                                        <FontAwesomeIcon
                                                            style={{ paddingTop: '1px' }}
                                                            icon="angle-double-right"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="section-img">
                                                    <img src={home.acf.para_services_img.url} alt="" />
                                                </div>
                                            </div>
                                        </Parallax>
                                        <Parallax
                                            bgImage={para.acf.para_careers.url}
                                            contentClassName="background"
                                            strength={1500}
                                        >
                                            <div className="section-flex" style={{ height: '100vh' }}>
                                                <div className="section-img">
                                                    <img src={home.acf.para_careers_img.url} alt="" />
                                                </div>
                                                <div className="section-content">
                                                    <h2>{home.acf.para_careers_title}</h2>
                                                    <p>{home.acf.para_careers_desc}</p>
                                                    <Link className="homepage-link" to="/careers">
                                                        Our Careers{' '}
                                                        <FontAwesomeIcon
                                                            style={{ paddingTop: '1px' }}
                                                            icon="angle-double-right"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </Parallax>
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
