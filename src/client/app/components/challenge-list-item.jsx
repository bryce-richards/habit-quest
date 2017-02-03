import React, { Component } from 'react';

const ChallengeListItem = ({challenge}) => {

  const cardContentStyles = {
    wordWrap: 'break-word',
    border: '1px solid #333',
    padding: '20px',
    margin: '15px'
  }
  const challengeUrl = "challenge/" + challenge.id;

  return (
    <div className="challenge-card col-sm-6 col-md-4 col-xs-12 col-lg-4" data-challengeId={challenge.id}>
      <div className="card-contents" style={cardContentStyles}>
        <h3>{challenge.title}</h3>
        <p>{challenge.description}</p>
        <a href={challengeUrl} className="btn btn-primary">Challenge Details</a>
      </div>
    </div>
  );
}

export default ChallengeListItem;
