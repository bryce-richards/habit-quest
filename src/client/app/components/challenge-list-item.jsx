import React, { Component } from 'react';
import { Well } from "react-bootstrap";

const ChallengeListItem = ({challenge}) => {

  const cardContentStyles = {
    wordWrap: 'break-word',
    border: '1px solid #333',
    padding: '20px',
    margin: '15px'
  }
  const challengeUrl = "challenge/" + challenge.id;

  return (
    <Well className="challenge-card drop-shadow col-sm-6 col-md-4 col-xs-12 col-lg-4" data-challengeId={challenge.id}>
      <div className="card-contents" style={cardContentStyles}>
        <h3 className="Bahiana">{challenge.title}</h3>
        <p className="dosis">{challenge.description}</p>
        <a href={challengeUrl} className="arsenal btn btn-info">Challenge Details</a>
      </div>
    </Well>
  );
}

export default ChallengeListItem;
