import React from 'react';
import './Navigation.styles.scss';
import {Link} from 'react-router-dom';

const Navigation = () => (
    <div className='navigation'>
        <Link className='page-link' to='/home'>
            Home
        </Link>
        <Link className='page-link' to='/our-services'>
            Our Services
        </Link>
        <Link className='page-link' to='/tax-checklist'>
            Tax Checklist
        </Link>
        <Link className='page-link' to='/related-links'>
            Related Links
        </Link>
        <Link className='page-link' to='/contact'>
            Contact Us
        </Link>
    </div>
)

export default Navigation;