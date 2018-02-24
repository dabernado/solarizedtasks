import React, { Component } from 'react';
import TodoInput from './TodoInput.js';
import Items from './Items.js';
import './solarized.css'; // Solarized-Dark colors
 
class App extends Component {
  state = {
    tasks: []
  };

  // Adds tasks to state
  addTask = (task) => {
    this.setState ({
      tasks: [...this.state.tasks, task]
    });

  // Deletes task from state
  deleteTask = (i) => {
    this.setState({
      tasks: this.state.tasks.filter((task, index) => index !== i )
    });
  }
 
	render() {
		return (
		<div className={'app'}>
      <div className={'ntmtt header'}>SOLARIZED TASKS</div>
      <div>
        <TodoInput addTask={this.addTask}/>
        <Items tasks={this.state.tasks} taskDelete={this.deleteTask} />
      </div>
    </div>
		);
	}
}

export default App;
