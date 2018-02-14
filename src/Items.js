import React, { Component } from 'react';
import Item from './Item.js';

class Items extends Component {
  render() {
    // Iterates through passed list of tasks and creates a task out of each of them
    const taskList = this.props.tasks.map((task, i) => {
      return (
        <Item key={i} index={i} tasks={task} deleteTask={this.props.taskDelete} />
      )
    });

    return (
      <div>
        {taskList}
      </div>
    );
  }
}

export default Items;
