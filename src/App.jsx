// import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  let[data,setdata]=useState('')
  let value = useRef()
  let foc =()=>{
    value.current.focus()
  }
  let text =()=>{
    setdata(data=value.current.value)
  }
  return (
    <div className="App">
      <input type="text" ref={value} onChange={()=>text()}/>
      <button onClick={foc}>click me!</button>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
