import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onReset }) => {

    return (
      <div>
        <div>
        <br />
        <br />
          <button onClick={onDecrement}>&nbsp;&nbsp;-&nbsp;&nbsp;</button>&nbsp;&nbsp;
          &nbsp; <span>{count}</span> &nbsp;&nbsp;
          <br />
          <br />
          <button onClick={onIncrement}>&nbsp;&nbsp;+&nbsp;&nbsp;</button>&nbsp;&nbsp;
          <br />
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
     
    );
}


export default Counter;