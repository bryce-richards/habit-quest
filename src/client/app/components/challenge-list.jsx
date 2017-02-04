import React, { Component } from 'react';
import ChallengeListItem from './challenge-list-item.jsx';

const ChallengeList = (props) => {
  const challengeListItems = props.challenges.map((challenge) => {
    return (
        <ChallengeListItem key={challenge.id} challenge={challenge} />
    )
  });

  return (
      <div className="col-lg-2 col-lg-offset-5" id="challenge-container" className="row">
        <h2 className="text-center dosis">CHALLENGES</h2>
        {challengeListItems}
      </div>
  );
}

export default ChallengeList;
