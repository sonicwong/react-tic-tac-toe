import { useState } from 'react';
import Game from './Game';

function App() {
  let [gameKey, setGameKey] = useState(0);

  const reset = (e) => {
    setGameKey(Math.floor(Math.random() * 9999));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={reset}>Reset game</button>
        </p>
        <Game key={gameKey} />
      </header>
    </div>
  );
}

export default App;
