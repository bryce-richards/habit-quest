import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// import Signin from './components/signin.jsx';
// import SignupForm from './components/signup.jsx';
// import Profile from './components/profile.jsx';
// import Header from './components/header.jsx';
import UserDashboardView from './container/UserDashboardView.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <UserDashboardView />
      </div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/*
        <Route path="signin" component={Signin}/>
        <Route path="signup" component={SignupForm}/>
        <Route path="profile" component={Profile }/> // route that should require auth
        */}
    </Route>
  </Router>,
  document.getElementById('app')
);
