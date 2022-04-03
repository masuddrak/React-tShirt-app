import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
            <nav className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/order'>OrderReview</Link>
                <Link to='/home'></Link>
            </nav>
    );
};

export default Header;