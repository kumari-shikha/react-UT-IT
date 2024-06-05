import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      
      <button id="increment" onClick={() => setCounter(count => count+1)}>Increment counter</button>
      <button id="decrement" onClick={() => setCounter(count => count >0 ? count-1 : count)}>Decrement counter</button>
      <h4 id="counter">Count {counter}</h4>
    </div>
  );
}

//Hotfix 2
export default App;
