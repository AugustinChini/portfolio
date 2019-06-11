import React from 'react';

import NavBar from './navBar/navBar'
import Home from './home/home';
import Footer from './footer/footer';

import './app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;