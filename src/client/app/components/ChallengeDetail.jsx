import React, { Component } from 'react';

const ChallengeDetail = (props) => {
    return (
      <div>
        <h2>Challenge id: {props.params.id}</h2>
      </div>
    );
}

export default ChallengeDetail;
