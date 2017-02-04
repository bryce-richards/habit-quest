import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

class SignedInNavbar extends React.Component {

    render() {
        return (
            <Navbar id="main-nav" inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        {/*{this.props.user.firstName} {this.props.user.lastName}*/}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav>
                  <NavItem href="/signin">Sign In</NavItem>
                  <NavItem href="/signup">Sign up</NavItem>
                </Nav>
                {/*
                  <Navbar.Collapse>
                  <Nav pullRight>
                  <NavItem eventKey={1} href="#">Sign Out</NavItem>
                  </Nav>
                  </Navbar.Collapse>
                  */}
            </Navbar>
        );
    }
}

SignedInNavbar.propTypes = {
    user: PropTypes.array
}

export default SignedInNavbar;
