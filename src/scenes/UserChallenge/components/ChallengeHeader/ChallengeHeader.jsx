import React, { Component, PropTypes } from 'react';

class ChallengeHeader extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Habit Quest</h1>
                <p><a className="btn btn-primary btn-lg" id="newChallenge" href="#" role="button" data-toggle="modal"
                      data-target="#challengeModal">Create a Challenge</a></p>
            </div>
        );
    }
}

export default ChallengeHeader;