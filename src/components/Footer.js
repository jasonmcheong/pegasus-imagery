import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = props => {
    return (
        <footer>
            {props.pages.map(footer => {
                if (footer.title.rendered === 'Footer') {
                    return (
                        <div className='footer'>
                            <div className='footer-title'>
                                <h2>{footer.acf.title}</h2>
                                <h3>{footer.acf.motto}</h3>
                            </div>
                            <div className='footer-grid'>
                                <div className='footer-excerpt-1'>
                                    <h4>{footer.acf.title}</h4>
                                    <p>{footer.acf.short_excerpt_1}</p>
                                </div>
                                <div className='footer-excerpt-2'>
                                    <p>{footer.acf.short_excerpt_2}</p>
                                </div>
                                <div className='footer-social'>
                                    <h4>Follow Us</h4>
                                    <div className='social-media-icons'>
                                        <a className='youtube' href='youtube.com'>
                                            <FontAwesomeIcon icon={['fab', 'youtube-square']} />
                                        </a>
                                        <a className='twitter' href='twitter.com'>
                                            <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                                        </a>
                                        <a className='facebook' href='facebook.com'>
                                            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='copyright'>
                                <p>{footer.acf.copyright}</p>
                            </div>
                        </div>
                    );
                }
            })}
        </footer>
    );
};

export default Footer;
