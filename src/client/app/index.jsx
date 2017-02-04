import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Signin from './components/signin.jsx';
import SignupForm from './components/signup.jsx';
import Profile from './components/profile.jsx';
// import Header from './components/header.jsx';
import UserDashboardView from './container/UserDashboardView.jsx';
import ChallengeDetail from './components/ChallengeDetail.jsx';
// import Header from './container/Header.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        {/*
          */}
        <UserDashboardView />
        {this.props.children}
      </div>
    )
  }
}


render(
  <Router history={browserHistory}>
    {/* Logged out routes */}
    <Route path="/" component={App}>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/challenge/:id" component={ChallengeDetail} />
    </Route>
    {/* Logged in routes */}

      {/*
        */}
  </Router>,
  document.getElementById('app')
);
