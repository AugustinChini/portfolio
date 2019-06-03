import React from 'react';

import NavBar from './navBar/navBar'

import './app.css';
import Home from './home/home';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;