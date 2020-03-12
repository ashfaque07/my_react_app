import React from 'react';
import logo from './logo.svg';
import './App.css';
import countryCard from './views/countryCard/countryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo spin" alt="logo" />
        {countryCard({
        	imgSrc:"https://picsum.photos/300/300",
        	name: "country",
        	population : 23,
        	buttonText : "Click Me",
        	callback : null
        })}
      </header>
      {/*<main>sdfsf</main>*/}
    </div>
  );
}

export default App;
