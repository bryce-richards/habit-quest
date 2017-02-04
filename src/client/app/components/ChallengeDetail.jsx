import React, { Component } from 'react';
import TaskList from './task-list.jsx';
const axios = require('axios');
import SignedInNavbar from "../container/SignedInNavbar.jsx";

class ChallengeDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: []
      };
    }
    componentWillMount() {
      this.fetchTasks()
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
          <h2>Challenge id: {this.props.params.id}</h2>
          <h2 className="text-center">Challenge id: {this.props.params.id}</h2>
          <TaskList tasks={this.state.tasks} />
        </div>
      );
    }
}

export default ChallengeDetail;
