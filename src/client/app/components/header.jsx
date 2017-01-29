import React, { Component } from 'react';
import {render} from 'react-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
