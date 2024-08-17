import {useState} from 'react';
import './App.css';

function App() {

  // var count = 2;

 const [count, setCount] = useState(2)


  function increment() {

    setCount(count*2)
    console.log(count);
    
  }

  return (
    <div className="App">
      hii {count} <br/>
      

      <button onClick = {increment}>Increment</button>

    </div>
  );
}

export default App;
