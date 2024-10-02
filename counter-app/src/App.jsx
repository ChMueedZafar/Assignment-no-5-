import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`counter-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="button-container">
        <button onClick={increment} className="btn increment">+</button>
        <button onClick={decrement} className="btn decrement">-</button>
        <button onClick={reset} className="btn reset">Reset</button>
      </div>
      <button onClick={toggleTheme} className="btn theme-toggle">
        {isDarkMode ? ' Light Mode' : ' Dark Mode'}
      </button>
    </div>
  );
};

export default Counter;
