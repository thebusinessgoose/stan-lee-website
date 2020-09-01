import React from 'react';
import './Related-Links.styles.scss';
import Navigation from '../../components/Navigation/Navigation.component';

const RelatedLinks = () => (
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
)

export default RelatedLinks;