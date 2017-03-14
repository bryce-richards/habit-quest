import React from 'react';
import {render} from 'react-dom';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

import Signin from './components/signin.jsx';
import SignupForm from './components/signup.jsx';
import Profile from './components/profile.jsx';

// import UserDashboardView from './container/UserDashboardView.jsx';
import ChallengeDetail from './components/ChallengeDetail.jsx';
import SignedInNavbar from "./container/SignedInNavbar.jsx";
import HomeCarousel from "./components/Carousel.jsx";

class App extends React.Component {
  render () {
    return (
      <div>
        {/*
          <UserDashboardView />
          <HomeCarousel />
          */}
        <SignedInNavbar />
        {this.props.children}
      </div>
    )
  }
}


render(
  <Router history={browserHistory}>
    {/* Logged out routes */}
    <Route path="/" component={App}>
      <IndexRoute component={Signin} />
      <Route path="/signup" component={SignupForm}/>
      <Route path="/signin" component={Signin}/>
    </Route>
    <Route path="/profile" component={Profile}/>
    <Route path="/challenge/:id" component={ChallengeDetail} />
    {/* Logged in routes */}

      {/*
        */}
  </Router>,
  document.getElementById('app')
);
