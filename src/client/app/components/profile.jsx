import React, { Component } from 'react';
import {render} from 'react-dom';
import ChallengeList from './challenge-list.jsx';
import axios from 'axios';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      challenges: []
    };
  }

  componentWillMount(){
    this.fetchChallenges();
  }

  fetchChallenges(data) {
    var that = this;

    axios.get('/api/challenge').then((res) => {
      var challenges = res.data.data
      that.setState({
        challenges: challenges
      });
    }).catch((e) => {
      return e
    });

  }

  render() {
    return (
      <ChallengeList
        challenges={this.state.challenges}
      />
    )
  }
}

export default Profile;
