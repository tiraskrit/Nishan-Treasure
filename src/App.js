import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validCodes = ['0000', '1111'];

  const handleSubmit = () => {
    if (validCodes.includes(code)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Bachelor Party Treasure Hunt</h1>
        <p>Enter the code to reveal the next hint!</p>
      </header>
      <div className="content">
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength="4"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="result">
        {isValid === true && (
          <div>
            <h2>Congratulations! You have cracked the code🎉</h2>
            <img
              src="https://www.planet-wissen.de/geschichte/deutsche_geschichte/geteilte_stadt_berlin/brandenburger-tor-104~_v-gseapremiumxl.jpg"
              alt="Treasure Location"
            />
          </div>
        )}
        {isValid === false && <p className="error">Incorrect code. Try again!</p>}
      </div>
    </div>
  );
};

export default App;
