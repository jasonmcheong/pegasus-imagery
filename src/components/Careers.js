import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../helper/ScrollToTop';

class Careers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ScrollToTop />
                {this.props.pages.map(page => {
                    if (page.title.rendered === 'Career') {
                        return (
                            <div key="c1" className="header">
                                <div className="header-inner">
                                    <h1>{page.acf.heading}</h1>
                                    <div
                                        className="text"
                                        dangerouslySetInnerHTML={{ __html: page.acf.heading_description }}
                                    />
                                </div>
                            </div>
                        );
                    }
                })}
                {this.props.categories.map(category => {
                    return (
                        <div className="career-section">
                            <h3>{category.name}</h3>
                            <div
                                className="career-desc text"
                                dangerouslySetInnerHTML={{ __html: category.description }}
                            />
                            <div className="career">
                                {this.props.careers.map(career => {
                                    if (category.id === career.categories[0])
                                        return (
                                            <div className="job">
                                                <h4>{career.title.rendered}</h4>
                                                <div
                                                    className="job-desc text"
                                                    dangerouslySetInnerHTML={{ __html: career.acf.short_description }}
                                                />
                                                <div className="btn-flex">
                                                    <Link
                                                        to={`${this.props.match.url}/${career.id}`}
                                                        className="career-btn"
                                                    >
                                                        Apply
                                                    </Link>
                                                </div>
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
