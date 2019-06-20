import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './navBar/navBar'
import Home from './home/home';
import Footer from './footer/footer';
import Contact from './contact/contact';

import './app.css';
import Realisations from './realisations/realisations';
import Cv from './cv/cv';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Contact className="contactLink" />

        <div className="pageContainer">
          <Route exact path="/" component={Home} />
          <Route path="/cv" component={Cv} />
          <Route path="/realisations" component={Realisations} />
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;