import React, { Component } from 'react';

const ChallengeListItem = ({challenge}) => {
  return (
    <li>{challenge.title}</li>
  );
}

export default ChallengeListItem;
