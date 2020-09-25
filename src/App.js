import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  //let [count,setCount]=useState(3);
  let countArr=useState(1);
  return (
    <CounterContext.Provider value={countArr}>
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
