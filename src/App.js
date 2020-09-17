import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Header from './/components/Header/Header.component'
import Navigation from './components/Navigation/Navigation.component';
import Footer from './components/Footer/Footer.component';
import {Route, Switch} from 'react-router-dom';
import OurServices from './pages/Our-Services/Our-Services';
import Contact from './pages/Contact/Contact';
import TaxChecklist from './pages/Tax-Checklist/Tax-Checklist';
import RelatedLinks from './pages/Related-Links/Related-Links';
import LandingPage from './components/LandingPage/LandingPage.component';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* <Router> */}
        <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
        {/* <Header />
        <Navigation /> */}
        <Route exact path='/home' component={Homepage} />
        <Route path='/our-services' component={OurServices} />
        <Route path='/tax-checklist' component={TaxChecklist} />
        <Route path='/related-links' component={RelatedLinks} />
        <Route path='/contact' component={Contact} />
    {/* </Router> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
