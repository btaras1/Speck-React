import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Inner">
                <Link to="/" className="Header-LogoContainer">
                    <img src={Logo} className="Header-Logo" alt="FOI logo" />
                </Link>
                <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
                <nav className="Header-Nav">
                    <Link to="/" className="Header-NavItem">Home</Link>
                    <Link to="/events" className="Header-NavItem">Events</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;