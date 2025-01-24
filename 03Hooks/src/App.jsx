import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let's update the counter using core js
  // let counter = 5;

  // function addValue(){
  //   console.log("Clicked" , counter)
  //   counter = counter + 1;

  // }
  // The above core js is not able to increment the counter as here react controls the flow and uI updation


  // Now use the useState hook --- > it will propagate the values to UI.

  let  [counter, setCounter ] =   useState(5);
  

  function addValue(){
    
    if(counter < 20) setCounter(counter + 1);
    
  }
  function removeValue(){
    
    if(counter > 0)setCounter(counter - 1);
  }


  return (
    <>
    <h1>chai or code</h1>
    <h3>Counter Value : {counter}</h3>
    <button onClick={addValue }>Increment</button>
    <br />
    <br />
    <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
