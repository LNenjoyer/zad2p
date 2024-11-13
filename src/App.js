import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={count ===0 ? 'bia' : 'cza'}>

      <button onClick={() => setCount(count===0? count + 1: count - 1)}>zmień stan</button>

    </div>
  );
}

export default App;
