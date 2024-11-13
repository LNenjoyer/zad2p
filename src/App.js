import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  // zmienna count, nie rozumiem po co utrudniać życie; dziwne to
  return (
    <div className={count ===0 ? 'bia' : 'cza'}>
      {/*dla wartości count 0 przyjmuje klase bia, a dla wartosci 1 klase cza*/}
      <button onClick={() => setCount(count===0? count + 1: count - 1)}>zmień stan</button>
      {/*to if który zmienia stan na 1 i 0*/}
        <h1>asfdgddgdggd</h1>
      {/*random text który pokazuje że kolor tekstu też sie zmienia*/}
    </div>
  );
}

export default App;
