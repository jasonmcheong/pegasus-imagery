import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const hideClass = () => {
    document.getElementById('bar').classList.toggle('close');
    document.getElementById('main-nav').classList.toggle('hide');
    document.getElementById('nav-items').classList.toggle('hide');
    document.querySelectorAll('.nav-items li').forEach(el => {
        el.classList.toggle('hide');
    });
};

const Header = props => {
    return (
        <nav className="main-nav hide" id="main-nav">
            <div className="nav">
                <div className="logo-container">
                    <Link to="/">
                        <img src={props.logo} alt="Pegasus Imagery Logo" className="logo" />
                    </Link>

                    <div className="bar" id="bar" onClick={hideClass}>
                        <div className="bar-line" />
                        <div className="bar-line" />
                        <div className="bar-line" />
                    </div>
                </div>
                <ul className="nav-items hide" id="nav-items">
                    <li className="hide">
                        <NavLink exact to="/" onClick={hideClass}>
                            Home
                        </NavLink>
                    </li>
                    <li className="hide">
                        <NavLink to="/about" onClick={hideClass}>
                            About
                        </NavLink>
                    </li>
                    <li className="hide">
                        <NavLink to="/services" onClick={hideClass}>
                            Services
                        </NavLink>
                    </li>
                    <li className="hide">
                        <NavLink to="/careers" onClick={hideClass}>
                            Careers
                        </NavLink>
                    </li>
                    <li className="hide">
                        <NavLink to="/gallery" onClick={hideClass}>
                            Gallery
                        </NavLink>
                    </li>
                    <li className="hide">
                        <NavLink to="/contact" onClick={hideClass}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
