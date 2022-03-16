import React from 'react';
//depends on app.js 
//onInputNumberChange, numberInputted, onInputNumber come from actions/index.js
const Counter = ({ count, onDecrement, onIncrement, onReset, onInputNumberChange, numberInputted, onInputNumber}) => {

    return (
      <div className='container-fluid'>
        <div>
        <br />
        <br />
          <button onClick={onDecrement}>&nbsp;&nbsp;-&nbsp;&nbsp;</button>&nbsp;&nbsp;
          &nbsp; <span>{count}</span> &nbsp;&nbsp;
        
          <button onClick={onIncrement}>&nbsp;&nbsp;+&nbsp;&nbsp;</button>&nbsp;&nbsp;
          <br />  <br />
         
          <button onClick={onReset}>Reset</button>          
          <br />  <br />
         
          <input type ="text" onChange={event => onInputNumberChange(event.target.value)} value ={numberInputted} />          
          <br />  <br />

         <button onClick={onInputNumber}>Change Count</button>
        </div>
      </div>
     
    );
}


export default Counter;