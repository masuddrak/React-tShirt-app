import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/order'>OrderReview</Link>
                <Link to='/home'></Link>
            </nav>
    );
};

export default Header;