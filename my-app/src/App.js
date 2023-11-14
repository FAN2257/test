import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
const [count, setCount] = useState(0)
  if ({count} === 0) {
  }
  return (
    <div className="App">
      <div>
        Fadel Aulia Naldi
        Teknologi Informasi 23
      <div>{count}</div>
        <button onClick={() => setCount((count) => count + 1)}> + </button>
        <button onClick={() => setCount((count) => count - 1)}> - </button>
        <button onClick={() => setCount(0)}> Reset </button>
      </div>
    </div>
  );
}

export default App;
