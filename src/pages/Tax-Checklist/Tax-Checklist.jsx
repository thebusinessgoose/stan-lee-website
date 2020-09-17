import React from 'react';
import './Tax-Checklist.styles.scss';
import Header from '../../components/Header/Header.component'
import Navigation from '../../components/Navigation/Navigation.component';
import Footer from '../../components/Footer/Footer.component';

const TaxChecklist = () => (
    <>
        <Header />
        <Navigation />
        <div className='tax-checklist'>
            <h1 className='tax-checklist-header'>
                Download Documents
            </h1>
            <h3 className='tax-checklist-summary'>
                Personal Income Tax Checklist (Post Date: February 2020)
            </h3>
            <a style={{display: "table-cell"}} className='tax-checklist-link' href='http://www.stanwleeca.com/download/T1.pdf' target='_blank'>
                Click Here
            </a>
        </div>
        <Footer />
    </>
)

export default TaxChecklist;