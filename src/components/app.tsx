import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './navBar/navBar'
import Home from './home/home';
import Footer from './footer/footer';

import './app.css';
import Realisations from './realisations/realisations';
import Cv from './cv/cv';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/cv" component={Cv} />
        <Route path="/realisations" component={Realisations} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;