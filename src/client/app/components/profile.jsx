import React, { Component } from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import ChallengeList from './challenge-list.jsx';
import Greeting from './greeting.jsx';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      challenges: []
    };
  }

  componentWillMount(){
    this.fetchUser();
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

  fetchUser() {
    var that = this;

    axios.get('/api/user').then((res) => {
      var user = res.data.data;
      console.log(user);
      that.setState({
        user: user
      });
    }).catch((e) => {
      return e
    });
  }

  render() {
    return (
      <div>
        {/* 
          <Greeting user={this.state.user} />
          */}
        <ChallengeList challenges={this.state.challenges} />
      </div>

    )
  }
}

export default Profile;
