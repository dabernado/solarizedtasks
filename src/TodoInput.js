import React, { Component } from 'react';
import './solarized.css';

class TodoInput extends Component {
  state = {
    input: '', // The input of the form that will be passed up to App.js
    error: false // Boolean that toggles the error message
  }
  
  // Sets this.state.input to whatever is being input into the form, and sets this.state.error to false
  handleChange = (e) => {
    this.setState ({
      input: e.target.value,
      error: false
    })
  }

  handleSubmit = () => {
    const { input } = this.state;

    // Checks to see if something is in the input box. If not, set this.state.error to true which shows the error message
    if (!input) {
      this.setState({
        error: true
      });
      return
    }

    // Sends input up to the state of App.js
    this.props.addTask(this.state.input);

    // Clears the input box
    this.setState({
      input: ''
    });
  }

  render() {
    return (
	  <div>
	    <div>
	    	<form onSubmit={this.addItem}>
	    		<input value={this.state.input} onChange={this.handleChange} placeholder="Enter Task" type={'text'}/>
	    		<div onClick={this.handleSubmit}>Submit</div>
          		{this.state.error ? <div className={'todo'}>Please enter a task</div> : null}
	    	</form>
	    </div>
   </div>
    );
  }
}

export default TodoInput;Sell This Pen to Me

