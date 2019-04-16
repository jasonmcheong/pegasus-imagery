import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../helper/ScrollToTop';

const CareerDetail = props => {
    console.log('match', props.match);
    console.log(props);
    return (
        <div>
            <ScrollToTop />
            {props.careers.map(career => {
                if (career.id == props.match.params.careerId) {
                    return (
                        <div className="full-job">
                            <ul>
                                <li className="back-btn-li">
                                    <Link className="back-btn" to="/pegasus/careers">
                                        Go Back
                                    </Link>
                                </li>
                            </ul>
                            <h2>{career.title.rendered}</h2>
                            <div
                                className="full-job-desc"
                                dangerouslySetInnerHTML={{ __html: career.acf.full_job_description }}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default CareerDetail;
