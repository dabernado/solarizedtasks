import React, { Component } from 'react';
import './solarized.css';

class Item extends Component {

  state = {
    completed: false, // Boolean that represents task completion
    class: "incompleted" // The class that is currently being applied to the task
  }

  // Toggles boolean in state that dictates task completion
  handleClick = () => {
    this.setState({
      completed: !this.state.completed
    });
  // If this.state.completed is false, set this.state.class to "incompleted", else set it to "completed"
    this.state.completed ? this.setState({class: "incompleted"}) : this.setState({class: "completed"})
  }

  // Activates passed function that deletes the task from the state
	deleteTask = () => {
    this.props.deleteTask(this.props.index);
  }
 
  render() {
		return (
			<div className={'task'}>
        <div className={this.state.class} onClick={this.handleClick} >
          {this.props.tasks}
        </div>
        <div className={'button'} onClick={this.deleteTask}>
          Delete
        </div>
      </div>
		);
	}
}

export default Item;
