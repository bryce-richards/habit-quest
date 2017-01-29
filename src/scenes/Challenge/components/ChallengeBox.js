import React, { Component, PropTypes } from 'react';

class ChallengeBox extends Component {

    _fetchChallenge() {
        jQuery.ajax({
            method: "GET",
            url: "/api/user/challenge/:user_id",
            success: (challenge) => {
                this.setState({ comments })
            }
        });
    }

    componentWillMount() {
        this._fetchChallenge();
    }

    render() {






    }



    componentDidMount() {
        this._timer = setInterval(
            () => this._fetchChallenge(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

}