import React, { PropTypes, Component } from 'react';
import TaskListItem from './task-list-item.jsx';
import { Well, Grid, Row, Col } from "react-bootstrap";

const TaskList = (props) => {
  const TaskListItems = props.tasks.map((task) => {
    return (
        <TaskListItem key={task.id} task={task} />
    )
  });

  return (
    <Grid>
      <Row>
        <Col lg={10} lgOffset={1}>
          <Well>
            <h3 className="text-center">Weekly Tasks</h3>
            {TaskListItems}
          </Well>
        </Col>
      </Row>
    </Grid>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array
}

export default TaskList;