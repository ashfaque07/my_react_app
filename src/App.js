import React from 'react';
import logo from './logo.svg';
import './App.css';
// import textView from './views/textView';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ClickCounter/>
      </header>
    </div>
  );
}

export default App;
