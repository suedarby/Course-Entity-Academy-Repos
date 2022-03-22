import React from 'react';
//depends on app.js 
// onInputNumberChange, numberInputted, onInputNumber come from actions/index.js
const Counter = ({ count, onDecrement, onIncrement, onReset, onInputNumberChange, numberInputted, onInputNumber, timesClicked}) => {

    return (
      <div className='container-fluid'>
        <div>
        <br />
        <br />
          <button onClick={onDecrement}>&nbsp;&nbsp; - works&nbsp;&nbsp;</button>&nbsp;&nbsp;
          &nbsp; <span>{count} works</span> &nbsp;&nbsp;
        
          <button onClick={onIncrement}>&nbsp;&nbsp; + works&nbsp;&nbsp;</button>&nbsp;&nbsp;
          <br />  <br />
         
          <button onClick={onReset}>Reset works</button>          
          <br />  <br />
          <span>Times the increment/decrement buttons have been clicked: {timesClicked}</span><br/>
          <p>How many times have the buttons been clicked? {count} works the same as the count above</p>
          <input type ="text" onChange={event => onInputNumberChange (event.target.value)} value={numberInputted} />          

        

          <button onClick={onInputNumber}>Change Count does not work yet</button>
        
        </div>
      </div>
     
    );
}


export default Counter;