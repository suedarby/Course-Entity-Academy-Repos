import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, reset, inputNumber, inputNumberChange } from '../actions/index';

// add onInputNumberChange, numberInputted, onInputNumber with this.props numberInputted={this.props.numberInputted}
class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <h3>Counter</h3>
        
        <Counter 
        count={this.props.count} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        onReset={this.props.onReset} 
        onInputNumber={this.props.inputNumber} 
        onInputNumberChange ={this.props.inputNumberChange}   />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onInputNumber:() => dispatch(onInputNumber()),
    onInputNumberChange:(number) => dispatch(onInputNumberChange(number))
    
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberInputted: state.numberInputted
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);