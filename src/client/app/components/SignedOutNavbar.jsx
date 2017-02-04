import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

class SignedInNavbar extends React.Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect className="navbar-fixed-top">
                <Navbar.Header>
                    <Navbar.Brand>
                        4 Week Challenge
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Sign In</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

SignedInNavbar.propTypes = {
    user: PropTypes.array
}

export default SignedInNavbar;