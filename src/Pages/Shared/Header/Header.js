import React from 'react';
import ActiveLink from '../../../Components/ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
        </nav>
    );
};

export default Header;