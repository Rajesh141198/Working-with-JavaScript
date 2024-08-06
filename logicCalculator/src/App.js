import React, {useState} from 'react';
import Keypad from './Keypad';
import './App.css';

function Calculator() {
  const [input, setInput] = useState("")


     function handleClick(value)
      {
        setInput(input+ value)
      } 

     function calculate(value)
      {
        const outputValue = eval(input)
        setInput(String(outputValue));
      }

     function handleClear()
      {
       setInput("")

      }
     
  return (
    <div>
      <h1>
        Calculator using React
      </h1>
      <input value ={input} className= "display" type="text"/>
      <Keypad handleClick={handleClick} calculate ={calculate} handleClear = {handleClear}></Keypad>

    </div>
  )
}

export default Calculator;
