import React, { useState } from 'react';
import MobileDetect from 'mobile-detect';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [opened, setStatus] = useState(false);
  const detector = new MobileDetect(navigator.userAgent);
  console.log(detector, detector.mobile());
  console.log('PHONE;: ', detector.phone());
  console.log('TABLET: ', detector.tablet());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          type="button"
          onClick={() => setStatus(!opened)}
          style={{
            padding: '10px',
            margin: '10px',
            color: 'white',
            backgroundColor: '#61dafb',
            width: '200px',
            fontSize: '30px',
          }}
        >
          Log to console
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
