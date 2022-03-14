import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
 //Whatever the case name in '' was in the index.js, is the Type for these functions.
  //+1

  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };
//+5
incrementFive = () => {
  this.props.dispatch({
    type: 'IncrementFive'
  });
};
//-1
  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };
//-10
decrementTen = () => {
  this.props.dispatch({
    type: 'DecrementTen'
  });
};
  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };
//names for the button's Onclick is the name of the function from the Counter class 
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
        <p>Add or Subtract 1</p>
          <button onClick={this.decrement}>&nbsp;-&nbsp;</button>&nbsp;&nbsp;
          
          <button onClick={this.increment}>&nbsp;+&nbsp;</button>&nbsp;&nbsp;
          <br />
          <br />
          <hr></hr>
          <p>Add 5 or Subtract 10</p>
          <button onClick={this.decrementTen}>&nbsp;-&nbsp;</button>&nbsp;&nbsp;
          <button onClick={this.incrementFive}>&nbsp;+&nbsp;</button>&nbsp;&nbsp;
          <br />
          <br />
          <button onClick={this.reset}>Reset</button><br />
          <br />
          <span>{this.props.count}</span>&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);