import React, { Component } from 'react';
const axios = require('axios');

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
          <h2>Challenge id: {this.props.params.id}</h2>
        </div>
      );
    }
}

export default ChallengeDetail;
