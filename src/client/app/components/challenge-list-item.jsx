import React, { Component } from 'react';
import Panel from "react-bootstrap";
import UserTaskContainer from "./UserTaskContainer.jsx";

const ChallengeListItem = ({challenge}) => {
  const TaskContainers = this.state.tasks.map((task, i) => {
    return (
      <UserTaskContainer
          key={i}
          id={task.id}
          week={task.weekNum}
          title={task.taskName}
          numDays={task.targetComplete}
          completedDays={task.completedDays}
        />
    );
  });

  return (
    <div className="list-group-item" data-challengeId={challenge.id}>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <ul>
        {TaskContainers}
      </ul>

    </div>
  );
  
}

ChallengeListItem.propTypes = {
  challenge: PropTypes.object
}

export default ChallengeListItem;
