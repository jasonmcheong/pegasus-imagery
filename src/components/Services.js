import React from 'react';

class Services extends React.Component {
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
                {this.state.data.map(services => {
                    if (services.title.rendered === 'Services') {
                        return (
                            <div>
                                <div className='header'>
                                    <div className='header-inner'>
                                        <h2>{services.acf.heading}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: services.acf.heading_description }} />
                                    </div>
                                </div>
                                <div className='services-infographic' />
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default Services;
