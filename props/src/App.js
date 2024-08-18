
import './App.css';
import Test from './Test';
import Test1 from './Test1';

function App() {

  var a = "MERN."
  var b = 9
  // var arr = [1, 2, 3, 4, 5]

  // const A = {
  //   nm: "Prashant",
  //   no: 9695996488,
  
  // }

  return (
    <div>

      <h1>Main Component</h1>
      <Test k={a} m={b} n="GFG."/>
      <Test k={b} m={a} n="GFG."/>
      <Test1/>
      <Test1>
        <h1> h1 of test1 </h1>
      </Test1> 

    </div>
  );
}

export default App;
