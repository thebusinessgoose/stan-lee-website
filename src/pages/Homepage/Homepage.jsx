import React from 'react';
import './Homepage.styles.scss'
import homepageImage from '../../assets/homepage-image.jpg';
import Navigation from '../../components/Navigation/Navigation.component';

const Homepage = () => (
        <div className='homepage'>
            <div className='image-container'>
                <img className='homepage-image' src={homepageImage} alt=''></img>
            </div>
            <p className='paragraph'>
                Stan W. Lee Inc, Chartered Professional Accountants was established since 1992. 
                We provide a wide range of professional, consulting and business advisory 
                services to clients in diverse industries.
            </p>
            <p className='paragraph'>
                Our firm has a commitment to Excellence in Client Service. We build long 
                term trusting relationships with our clients. The trust and commitment to 
                our clients enable us to thoroughly understand and meet the clients' 
                business needs. We take pride in partnering up with our clients and 
                effectively assuming their problems and challenges as our own. As a result, 
                we are readily available at all times to provide timely service. Our firm 
                has established strategic alliances with professionals who can bring expertise 
                to the table for our clients. Ultimately, our goal is to succeed by helping 
                our clients to succeed in their businesses.
            </p>
            <p className='paragraph'>
                The firm was established by Stan W. Lee. He brings with him over 30 years 
                of public practice experience. He has extensive experience with owner 
                managed businesses and expertise in research and development tax incentives 
                and government grants. He serves on the board of directors of both local and 
                national organizations. He has written numerous business articles for the Vancouver Sun.
            </p>
        </div>

)

export default Homepage;