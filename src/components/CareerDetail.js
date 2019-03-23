import React from 'react';
import { Link } from 'react-router-dom';

const CareerDetail = props => {
    console.log('match', props.match);
    console.log(props);
    return (
        <div>
            {props.careers.map(career => {
                if (career.id == props.match.params.careerId) {
                    return (
                        <div className='full-job'>
                            <li>
                                <Link to='/careers'>Go Back</Link>
                            </li>
                            <h2>{career.title.rendered}</h2>
                            <div
                                className='full-job-desc'
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
