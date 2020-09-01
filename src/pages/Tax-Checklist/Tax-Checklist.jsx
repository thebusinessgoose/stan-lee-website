import React from 'react';
import './Tax-Checklist.styles.scss';
import Navigation from '../../components/Navigation/Navigation.component';

const TaxChecklist = () => (
        <div className='tax-checklist'>
            <h1 className='tax-checklist-header'>
                Download Documents
            </h1>
            <h3 className='tax-checklist-summary'>
                Personal Income Tax Checklist (Post Date: February 2020)
            </h3>
            <a className='tax-checklist-link' href='http://www.stanwleeca.com/download/T1.pdf'>
                Click Here
            </a>
        </div>
)

export default TaxChecklist;