import React from 'react';

class Careers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageData: [],
            careerData: [],
            categoryData: [],
        };
    }

    handleClick(evt) {
        console.log(evt.source_url);
    }

    componentWillMount() {
        fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/pages')
            .then(res => res.json())
            .then(data => this.setState({ pageData: data }));
        fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/career')
            .then(res => res.json())
            .then(data => this.setState({ careerData: data }));
        fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/categories')
            .then(res => res.json())
            .then(data => this.setState({ categoryData: data }));
    }
    render() {
        return (
            <div>
                {this.state.pageData.map(pageData => {
                    if (pageData.title.rendered === 'Career') {
                        return (
                            <div className='header'>
                                <div className='header-inner'>
                                    <h2>{pageData.acf.heading}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: pageData.acf.heading_description }} />
                                </div>
                            </div>
                        );
                    }
                })}
                {this.state.categoryData.map(categoryData => {
                    return (
                        <div className='career-section'>
                            <h3>{categoryData.name}</h3>
                            <div className='career-desc' dangerouslySetInnerHTML={{ __html: categoryData.description }} />
                            <div className='career'>
                                {this.state.careerData.map(careerData => {
                                    if (categoryData.id === careerData.categories[0])
                                        return (
                                            <div className='job'>
                                                <h4>{careerData.title.rendered}</h4>
                                                <div className='job-desc' dangerouslySetInnerHTML={{ __html: careerData.excerpt.rendered }} />
                                                <button className='career-btn'>Apply</button>
                                            </div>
                                        );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Careers;
