import React from 'react';
import ActiveLink from '../../../Components/ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='d-flex justify-content-center p-5'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/services">Services</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
        </nav>
    );
};

export default Header;