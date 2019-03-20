import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <img src={logo} alt='Pegasus Imagery Logo' className='logo' />
            </Link>
            <ul className='nav-items'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/careers'>Careers</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
