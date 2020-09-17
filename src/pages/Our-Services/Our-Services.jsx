import React from 'react';
import './Our-Services.styles.scss';
import Header from '../../components/Header/Header.component';
import Navigation from '../../components/Navigation/Navigation.component';
import Footer from '../../components/Footer/Footer.component';
import servicesImage from '../../assets/services-image.jpg';

const OurServices = () => (
    <>
        <Header />
        <Navigation />
        <div className='services-page'>
            <div className='services-header'>
                <div className='services-image-container'>
                    <img className='services-image' src={servicesImage} alt=''></img>
                </div>
            </div>
            <div className='services'>
                <div className='service'>
                    <h1 className='service-title main'>
                        Our Services
                    </h1>
                    <p className='service-summary'>
                        Our professional service includes the traditional public accounting, 
                        corporate finance, reorganization, and tax planning and advisory.
                        In addition, we provide advisory services such as finance placement, 
                        business valuations, business sales and acquisitions, business and 
                        estate planning, life insurance planning, and mediation.
                    </p>
                </div>
                <div className='service'>
                    <h1 className='service-title'>
                        Traditional Public Accounting
                    </h1>
                    <p className='service-summary'>
                        Traditional accounting work which is necessary to meet the general 
                        financial reporting requirements of various known and unknown financial 
                        statements users, such as owner operator, shareholders, financial 
                        institutions, Canada Revenue Agency (CRA), and other government bodies. 
                        We will ensure that all regulatory and income tax filing requirements 
                        are met on a timely basis.
                        <br/> We fulfill our clients needs in this area through the following services:
                    </p>
                    <h4 className='service-summary-subheading'>
                        Preparation of year end financial statements:
                    </h4>
                    <ul className='bullet-points'>
                        <li className='bullet-point'>
                            Review
                        </li>
                        <li className='bullet-point'>
                            Compilation
                        </li>
                    </ul>
                    <h4 className='service-summary-subheading'>
                        Preparation of Tax Returns:
                    </h4>
                    <ul className='bullet-points'>
                        <li className='bullet-point'>
                            Personal Tax Returns
                        </li>
                        <li className='bullet-point'>
                            Sole Proprietorships & Corporate Tax Returns
                        </li>
                        <li className='bullet-point'>
                            GST (Goods & Services Tax) Returns
                        </li>
                        <li className='bullet-point'>
                            PST (Provincial Sales Tax) Returns
                        </li>
                        <li className='bullet-point'>
                            Payroll Source Deductions
                        </li>
                        <li className='bullet-point'>
                            T3, T4 & T4A, T5 Information Returns
                        </li>
                        <li className='bullet-point'>
                            WCB Returns
                        </li>
                    </ul>
                    <h4 className='service-summary-subheading'>
                        Basic accounting and bookkeeping services:
                    </h4>
                    <p className='service-summary'>
                        We can prepare clear and accurate accounting record on a periodic basis (monthly, quarterly, or yearly)
                    </p>
                </div>
                <div className='service'>
                    <h1 className='service-title'>
                        Corporate Finance
                    </h1>
                    <p className='service-summary'>
                        We will assist companies to obtain financing to expand and develop their businesses.
                    </p>
                </div>
                <div className='service'>
                    <h1 className='service-title'>
                        Reorganization
                    </h1>
                    <p className='service-summary'>
                        We will assist companies in corporate reorganizations when business 
                        partners are entering or exiting a company. We will assist in the 
                        negotiation of business sales and acquisitions. We will assist in 
                        new companies set up corporate structures which will optimize tax advantages.
                    </p>
                </div>
                <div className='service'>
                    <h1 className='service-title'>
                        Tax Advisory and Planning
                    </h1>
                    <p className='service-summary'>
                        We understand that planning ahead play an important role in reducing 
                        the client tax liability and avoiding large tax payments. We focused 
                        on finding opportunities and leveraging them to clients' best interest 
                        in the form of significant tax savings. Through implemented, resourceful 
                        solutions, the practice helps minimize client's bottom-line expenses 
                        and eliminating unpleasant tax surprises.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </>
)

export default OurServices;