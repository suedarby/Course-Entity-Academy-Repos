import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/index';

// add onInputNumberChange, numberInputted, onInputNumber with this.props
class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <h3>Counter</h3>
        
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onReset={this.props.onReset} onInputNumberChange ={this.props.onInputNumberChange} numberInputted={this.props.numberInputted} onInputNumber={this.props.onInputNumber} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    //do these have to be in specific order to work?
    onInputNumberChange:(number) => dispatch(onInputNumberChange(number)), 
    onInputNumber:() => dispatch(onInputNumber())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberInputted: state.numberInputted
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);