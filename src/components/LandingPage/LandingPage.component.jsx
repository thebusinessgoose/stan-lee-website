import React from 'react';
import './LandingPage.styles.scss';
import Header from '../Header/Header.component';
import entrance from '../../assets/stan-lee-front-door.jpg';
import {Link} from 'react-router-dom';

const LandingPage = () => (
    <div className='landing-page'>
        {/* <Header /> */}
        <Link className='enter-button' to='/home'>
            Enter
        </Link>
        
        {/* <div className='landing-page-img-container'>
            <img className='landing-page-img' src={entrance} alt=''></img>
        </div> */}

        {/* <img className='landing-page-img' src={entrance} alt=''></img>
        <Link className='enter-button' to='/home'>
            Enter
        </Link> */}
    </div>
)

export default LandingPage;