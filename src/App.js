import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './components/countries/Countries.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo spin" alt="logo" />
      </header>
      <Countries />
    </div>
  );
}

export default App;
