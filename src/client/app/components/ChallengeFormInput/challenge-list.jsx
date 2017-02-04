import React, { Component } from "react";
import UserChallengePanel from "../container/UserChallengePanel.jsx";

const ChallengeList = (props) => {
  const challengeListItems = props.challenges.map((challenge) => {
    return (
        <UserChallengePanel
          key={challenge.id}
          challenge={challenge} 
        />
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
