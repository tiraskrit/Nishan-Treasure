import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validCodes = ['2920', '3890'];

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
              src="https://raw.githubusercontent.com/tiraskrit/Nishan-Treasure/refs/heads/main/chitra.jpg"
              alt="Treasure Location"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}
        {isValid === false && <p className="error">Incorrect code. Try again!</p>}
      </div>
    </div>
  );
};

export default App;
