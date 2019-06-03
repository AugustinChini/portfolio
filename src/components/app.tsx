import React from 'react';

import NavBar from './navBar/navBar'

import logo from '../assets/img/logo.png';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;