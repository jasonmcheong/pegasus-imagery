/*
 *
 *   TODO: Link clickable button to full job description
 *
 */

import React from 'react';

class Careers extends React.Component {
    handleClick(evt) {
        console.log(evt.source_url);
    }

    render() {
        return (
            <div>
                {this.props.pages.map(page => {
                    if (page.title.rendered === 'Career') {
                        return (
                            <div className='header'>
                                <div className='header-inner'>
                                    <h1>{page.acf.heading}</h1>
                                    <div dangerouslySetInnerHTML={{ __html: page.acf.heading_description }} />
                                </div>
                            </div>
                        );
                    }
                })}
                {this.props.categories.map(category => {
                    return (
                        <div className='career-section'>
                            <h3>{category.name}</h3>
                            <div className='career-desc' dangerouslySetInnerHTML={{ __html: category.description }} />
                            <div className='career'>
                                {this.props.careers.map(career => {
                                    if (category.id === career.categories[0])
                                        return (
                                            <div className='job'>
                                                <h4>{career.title.rendered}</h4>
                                                <div
                                                    className='job-desc'
                                                    dangerouslySetInnerHTML={{ __html: career.excerpt.rendered }}
                                                />
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
