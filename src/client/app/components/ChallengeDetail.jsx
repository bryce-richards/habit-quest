import React, { Component } from 'react';
import TaskList from './task-list.jsx';
const axios = require('axios');
import SignedInNavbar from "../container/SignedInNavbar.jsx";

class ChallengeDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [],
        challengeTitle: null
      };
    }
    componentWillMount() {
      this.fetchChallenge();
      this.fetchTasks();
    }

    fetchChallenge() {
      var url = "/api/challenge/" + this.props.params.id;
      var that = this;
      axios.get(url).then((res) => {
        console.log("Title: ", res.data.data.title);
        that.setState({challengeTitle: res.data.data.title})
      }).catch((e) => {
        return e
      })
    }

    fetchTasks() {
      var url = "/api/task/" + this.props.params.id;

      var that = this;

      axios.get(url).then((res) => {
        that.setState({tasks: res.data.data});
      }).catch((e) => {
        return e
      });

    }

    render() {
      return (
        <div>
          <SignedInNavbar />
          <TaskList tasks={this.state.tasks} challengeTitle={this.state.challengeTitle} />
        </div>
      );
    }
}

export default ChallengeDetail;
