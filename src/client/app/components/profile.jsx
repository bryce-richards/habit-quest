import React, { Component } from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { Grid, Col, Row } from "react-bootstrap";
import ChallengeList from './challenge-list.jsx';
import Greeting from './greeting.jsx';
import UserDashboardView from '../container/UserDashboardView.jsx';
import SignedInNavbar from "../container/SignedInNavbar.jsx";

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
        <SignedInNavbar /> 
        <Grid>
          <Row>
            <Col lg={10} lgOffset={1}>
              <Greeting user={this.state.user} />
              <br />
              <br />
              <br />
              <UserDashboardView />
              <ChallengeList challenges={this.state.challenges} />
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default Profile;
