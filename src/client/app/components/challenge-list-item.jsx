import React, { Component } from 'react';

const ChallengeListItem = ({challenge}) => {
  return (
    <div className="list-group-item" data-challengeId={challenge.id}>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
    </div>
  );
}

export default ChallengeListItem;
