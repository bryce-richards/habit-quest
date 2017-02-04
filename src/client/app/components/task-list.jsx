import React, { Component } from 'react';
import TaskListItem from './task-list-item.jsx';

const TaskList = (props) => {
  const TaskListItems = props.tasks.map((task) => {
    return (
        <TaskListItem key={task.id} task={task} />
    )
  });

  return (
      <div id="task-container" className="row">
        <h2>Tasks</h2>
        {TaskListItems}
      </div>
  );
}

export default TaskList;
