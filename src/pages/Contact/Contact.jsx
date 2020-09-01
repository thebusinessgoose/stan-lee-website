import React from 'react';
import './Contact.styles.scss';
import Navigation from '../../components/Navigation/Navigation.component';
import {ReactComponent as PhoneIcon} from '../../assets/phone.svg';
import {ReactComponent as MailIcon} from '../../assets/mail.svg';
import {ReactComponent as FaxIcon} from '../../assets/fax.svg';

const Contact = () => (
    <div className='contact-page'>
        <div className='contact-details'>
            <h1 className='contact-header'>
                Contact Us
            </h1>
            <div className='contact-detail'>
                <h1 className='form-of-contact'>
                    Office Hours
                </h1>
                <div className='contact-info'>
                    <p>8:30am - 5:00pm</p> 
                    <p>Pacific P.S.T.</p>
                </div>
            </div>
            <div className='contact-detail'>
                <h1 className='form-of-contact'>
                    Address
                </h1>
                <div className='contact-info'>
                    <p>500-1541 West Broadway</p> 
                    <p>Vancouver, BC</p>
                    <p>V6J 1W7</p>
                    <p>Canada</p>
                </div>
            </div>
            <div className='contact-detail'>
                <h1 className='form-of-contact'>
                    Contact
                </h1>
                    <div className='contact-info'>
                        <PhoneIcon />
                        <p className='detail'>Tel: 604-291-6016</p>
                    </div>
                    <div className='contact-info'>
                        <FaxIcon />
                        <p className='detail'>Fax: 604-291-2018</p>
                    </div>
                    <div className='contact-info'>
                        <MailIcon />
                        <p className='detail'>Email: stan@stanwleeca.com</p>
                    </div>
            </div>
        </div>
    </div>
)

export default Contact;