import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Signin from './components/signin.jsx';
import Profile from './components/profile.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Again!</p>
  			{this.props.children}
      </div>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="signin" component={Signin}/>
      <Route path="profile" component={Profile}/> // route that should require auth
    </Route>
  </Router>,
  document.getElementById('app')
);
