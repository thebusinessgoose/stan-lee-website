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

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/our-services' component={OurServices} />
        <Route exact path='/tax-checklist' component={TaxChecklist} />
        <Route exact path='/related-links' component={RelatedLinks} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
