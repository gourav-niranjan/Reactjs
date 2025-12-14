import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  
    const addval = () => {
       if (counter < 20) {
      setCounter(counter + 1);
    };
  }
 
    const removeval = () => {
       if (counter > 0) {
      setCounter(counter - 1);
    };
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addval}>add button {counter} </button>
      <button onClick={removeval}>remove button {counter} </button>
    </>
  );
}

export default App;
