import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './navBar/navBar'
import Home from './home/home';
import Footer from './footer/footer';

import './app.css';
import Realisations from './realisations/realisations';
import Cv from './cv/cv';
import Contact from './contact/contact';
import { NavbarEvent } from '../model/NavbarEvent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <NavBar onChange={onNavbarChange} />
        <div className="pageContainer">
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={Cv} />
          <Route path="/realisations" render={() => <Realisations navbarListeners={navbarListeners}></Realisations>} />
        </div>
        <Footer />
      </Router>
      <Contact className="contactLink" />
    </div>
  );
}

// list of all the subsribers from child components
let navbarListeners: Array<Function> = []
// dispatch the event to all the subscribers
let onNavbarChange = function(event: NavbarEvent) {
  navbarListeners.forEach( (fct) =>{
    fct(event);
  });
}

export default App;