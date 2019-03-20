import React from 'react';

class Services extends React.Component {
    handleClick(evt) {
        document.getElementById('service-display').innerHTML = `
            <div>
                <h3>${evt.title}</h3>
                <p>${evt.desc}</p>
            </div>
            ${evt.video}
        `;
    }

    render() {
        return (
            <div>
                {this.props.pages.map(services => {
                    if (services.title.rendered === 'Services') {
                        return (
                            <div>
                                <div className='header'>
                                    <div className='header-inner'>
                                        <h1>{services.acf.heading}</h1>
                                        <div dangerouslySetInnerHTML={{ __html: services.acf.heading_description }} />
                                    </div>
                                </div>
                                <div className='service-tabs'>
                                    <div
                                        onClick={evt =>
                                            this.handleClick(
                                                {
                                                    title: services.acf.service_1_title,
                                                    desc: services.acf.service_1_description,
                                                    video: services.acf.service_1_video_link,
                                                },
                                                evt
                                            )
                                        }
                                    >
                                        <img
                                            src={services.acf.service_1_icon.url}
                                            alt='icon'
                                            width='25px'
                                            height='25px'
                                        />
                                        <h2>{services.acf.service_1_title}</h2>
                                    </div>
                                    <div
                                        onClick={evt =>
                                            this.handleClick(
                                                {
                                                    title: services.acf.service_2_title,
                                                    desc: services.acf.service_2_description,
                                                    video: services.acf.service_2_video_link,
                                                },
                                                evt
                                            )
                                        }
                                    >
                                        <img
                                            src={services.acf.service_2_icon.url}
                                            alt='icon'
                                            width='25px'
                                            height='25px'
                                        />
                                        <h2>{services.acf.service_2_title}</h2>
                                    </div>
                                    <div
                                        onClick={evt =>
                                            this.handleClick(
                                                {
                                                    title: services.acf.service_3_title,
                                                    desc: services.acf.service_3_description,
                                                    video: services.acf.service_3_video_link,
                                                },
                                                evt
                                            )
                                        }
                                    >
                                        <img
                                            src={services.acf.service_3_icon.url}
                                            alt='icon'
                                            width='25px'
                                            height='25px'
                                        />
                                        <h2>{services.acf.service_3_title}</h2>
                                    </div>
                                </div>
                                <div id='service-display'>
                                    <div>
                                        <h3>{services.acf.service_1_title}</h3>
                                        <p>{services.acf.service_1_description}</p>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: services.acf.service_1_video_link }} />
                                </div>
                                <div
                                    className='services-infographic'
                                    style={{
                                        width: '100%',
                                        height: '578px',
                                        backgroundImage: `url(${services.acf.infographic.url})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}
                                />
                                <div className='services-capabilities'>
                                    <div>
                                        <h4>{services.acf.capability_1_title}</h4>
                                        <img src={services.acf.capability_1_img.url} alt='capability 1' />
                                        <p>{services.acf.capability_1_description}</p>
                                    </div>
                                    <div>
                                        <h4>{services.acf.capability_2_title}</h4>
                                        <img src={services.acf.capability_2_img.url} alt='capability 2' />
                                        <p>{services.acf.capability_2_description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default Services;
