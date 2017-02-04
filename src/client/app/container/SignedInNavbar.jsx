import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

class SignedInNavbar extends React.Component {

    render() {
        return (

            <nav id="main-nav" className="navbar navbar-default">
              <div className="container">

                <div className="navbar-header">
                  <h2 className="bahiana"><i className="fa fa-tasks" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 Week Challenge</h2>
                  <span id="navbar-toggle" type="button" className="navbar-toggle collapsed fa fa-chevron-up rotate" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  </span>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="dosis nav navbar-nav navbar-right" id="navbar-right">
                    <li className="dosis"><a href="/signup">Sign Up</a></li>
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
