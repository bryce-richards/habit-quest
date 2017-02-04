import React, { Component } from 'react';

const TaskListItem = ({task}) => {

  return (
  <li>{task.taskName}</li>
  );
}

export default TaskListItem;
