import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

class SignedInNavbar extends React.Component {

    render() {
        return (

            <nav id="main-nav" className="navbar navbar-default">
              <div className="container">

                <div className="navbar-header">
                  <a className="navbar-brand" href="#">Brand</a>
                  <span id="navbar-toggle" type="button" className="navbar-toggle collapsed fa fa-chevron-up rotate" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  </span>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/signin">Log In</a></li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}

SignedInNavbar.propTypes = {
    user: PropTypes.array
}

export default SignedInNavbar;
