import React, { Component } from 'react';
import ChallengeListItem from './challenge-list-item.jsx';

const ChallengeList = (props) => {
  const challengeListItems = props.challenges.map((challenge) => {
    return (
        <ChallengeListItem key={challenge.id} challenge={challenge} />
    )
  });

  return (
      <div id="challenge-container" className="row">
        <h2>Challenges</h2>
        {challengeListItems}
      </div>
  );
}

export default ChallengeList;
