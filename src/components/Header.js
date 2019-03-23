import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png';

const Header = () => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <img src={logo} alt='Pegasus Imagery Logo' className='logo' />
            </Link>
            <ul className='nav-items'>
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
        </nav>
    );
};

export default Header;
