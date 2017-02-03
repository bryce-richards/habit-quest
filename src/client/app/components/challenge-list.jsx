import React, { Component } from 'react';
import ChallengeListItem from './challenge-list-item.jsx';

const ChallengeList = (props) => {
  const challengeListItems = props.challenges.map((challenge) => {
    return (
        <ChallengeListItem
          key={challenge.id}
          challenge={challenge} />
    )
  });

  return (
      <div>
        <h2>Challenges</h2>
        <ul className="list-group">
          {challengeListItems}
        </ul>
      </div>
  );
}

export default ChallengeList;
