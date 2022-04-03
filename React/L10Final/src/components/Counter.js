import React from 'react';
//depends on app.js 
const Counter = ({ count, onDecrement, onIncrement, onReset, inputNumberChange, numberInputted, inputNumber, buttonClick}) => {

    return (
      <div className='container-fluid'>
        <div>
        <br />
        <br />
          <button onClick={onDecrement}>&nbsp;&nbsp; - &nbsp;&nbsp;</button>&nbsp;&nbsp;
          &nbsp; <span>{count} </span> &nbsp;&nbsp;
        
          <button onClick={onIncrement}>&nbsp;&nbsp; + &nbsp;&nbsp;</button>&nbsp;&nbsp;
          <br />  <br />
         
          <button onClick={onReset}>Reset </button>          
          <br />  <br />
          <p>How many times have the buttons been clicked? {count} or {buttonClick}</p>
          <input type ="text" onChange={event => inputNumberChange(event.target.value)} value={numberInputted} />          
          <br />  <br />

          <button onClick={inputNumber}>Change Count</button>
        </div>
      </div>
     
    );
}


export default Counter;