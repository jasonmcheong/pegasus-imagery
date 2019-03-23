import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const hideClass = () => {
    document.getElementById('nav-items').classList.toggle('hide');
    document.getElementById('main-nav').classList.toggle('hide');
};

const Header = props => {
    return (
        <nav className='main-nav hide' id='main-nav'>
            <div className='nav'>
                <div className='logo-container'>
                    <Link to='/'>
                        <img src={props.logo} alt='Pegasus Imagery Logo' className='logo' />
                    </Link>

                    <FontAwesomeIcon icon={'bars'} className='bar' onClick={hideClass} />
                </div>
                <ul className='nav-items hide' id='nav-items'>
                    <li>
                        <NavLink exact to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/careers'>Careers</NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
