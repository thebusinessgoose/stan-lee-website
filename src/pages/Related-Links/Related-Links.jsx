import React from 'react';
import './Related-Links.styles.scss';
import Header from '../../components/Header/Header.component';
import Navigation from '../../components/Navigation/Navigation.component';
import Footer from '../../components/Footer/Footer.component';

const RelatedLinks = () => (
    <>
        <Header />
        <Navigation />
        <div className='related-links'>
            <h1 className='related-links-header'>
                Related Links
            </h1>
            <a className='related-link' href='http://www.bank-banque-canada.ca/'>Bank of Canada</a>
            <a className='related-link' href='http://www.cra-arc.gc.ca/'>Canada Revenue Agency</a>
            <a className='related-link' href='http://www.servicecanada.gc.ca'>Service Canada</a>
            <a className='related-link' href='http://www.labour.gov.bc.ca/esb'>Employments Standards Branch</a>
            <a className='related-link' href='http://www.ica.bc.ca'>Chartered Professional Accountants B.C.</a>
            <a className='related-link' href='http://www.worksafebc.com'>Work Safe B.C.</a>
            <a className='related-link' href='http://www.fin.gov.bc.ca'>Government of B.C. - Annual Reports</a>
            <a className='related-link' href='http://www.rev.gov.bc.ca/ctb'>Consumer Taxation - PST</a>
            <a className='related-link' href='http://www.corporateonline.gov.bc.ca'>BC Online</a>
        </div>
        <Footer />
    </>
)

export default RelatedLinks;