import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    handleClick(evt) {
        console.log(evt.source_url);
    }

    componentWillMount() {
        fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/pages')
            .then(res => res.json())
            .then(data => this.setState({ data: data }));
    }
    render() {
        return (
            <div>
                {this.state.data.map(about => {
                    if (about.title.rendered === 'About') {
                        return (
                            <div>
                                <div className='header'>
                                    <div className='header-inner'>
                                        <h2>{about.acf.heading}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: about.acf.heading_description }} />
                                    </div>
                                </div>
                                <div className='about-company-section'>
                                    <div className='about-company-flex'>
                                        <div className='about-company-info'>
                                            <h3>{about.acf.about_company_title}</h3>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: about.acf.about_company_description,
                                                }}
                                            />
                                            <button className='about-btn'>Our Services</button>
                                        </div>
                                        <div className='about-company-media'>
                                            <img className='about-company-img' src={about.acf.about_company_image.sizes.medium} />
                                            <div
                                                className='about-company-video'
                                                dangerouslySetInnerHTML={{
                                                    __html: about.acf.about_company_video_link,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>{about.acf.about_aircraft_title}</h2>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: about.acf.about_aircraft_description,
                                        }}
                                    />
                                    <img src={about.acf.about_aircraft_image.sizes.large} />
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default About;
