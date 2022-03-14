import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return <NumberOfStudents />;
};
class NumberOfStudents extends React.Component {
  constructor(props) {
    super(props);
//set the initial state for each type of counter
    this.state = {
      enrolledStudents: 50,
      waitlistedStudents: 8,
      addStudents: 0,
      addWaitlist: 0
    };
  }
  //watch the singular v. plural variables and class names
  //increases the number of enrolled students by 1
  incrementEnrolled() {
    this.setState({
      enrolledStudents: this.state.enrolledStudents + 1
    });
  }
  incrementWaitlisted() { //increments the student on the waitlist by 1
    this.setState({
      waitlistedStudents: this.state.waitlistedStudents + 1
    });
  }
  //adds functionality to increase students by multiples via form field
  addMultipleStudents() {
    this.setState({
      enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addStudents)
    });
  }
  //adds function to increase the waitlist by multiples via form field
  addMultipleWaitlist() {
    this.setState({
      waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addWaitlist)
    });
  }
  //renders the buttons and form fields fro single and multiple incrementing
  render() {
    return (
      <div>
        <h3>Enrolled Students: {this.state.enrolledStudents};</h3>
        <button onClick={this.incrementEnrolled.bind(this)} >
          add 1 student
        </button>
        <hr></hr>
        <h4>Add multiple enrolled students:</h4>
        <input
          type="number"
          onChange={event => this.setState({ addStudents: event.target.value })}
          value={this.state.addStudents} />
        <button onClick={this.addMultipleStudents.bind(this)}>Increase Students</button>
        <hr></hr>
        <div>
          <h3>Waitlisted Students: {this.state.waitlistedStudents};</h3>
          <button onClick={this.incrementWaitlisted.bind(this)} >
            add 1 student
          </button>
          <hr></hr>
          <h4>Add multiple wait list students:</h4>
          <input
            type="number"
            onChange={event => this.setState({ addWaitlist: event.target.value })}
            value={this.state.addWaitlist} />
          <button onClick={this.addMultipleWaitlist.bind(this)}>Increase Waitlist</button>
        </div>
      </div>
    );
  }
}
//displays on index.html at the div with the class of root
ReactDOM.render(<App />, document.getElementById('root'));