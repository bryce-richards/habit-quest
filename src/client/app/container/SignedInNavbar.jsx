import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";

class SignedInNavbar extends React.Component {

    render() {
        return (
<<<<<<< HEAD
            <Navbar inverse collapseOnSelect className="navbar-fixed-top">
=======
            <Navbar inverse collapseOnSelect>
>>>>>>> a4bfb70675645179bd7da6f983d45bb0a6bac43d
                <Navbar.Header>
                    <Navbar.Brand>
                        {/*{this.props.user.firstName} {this.props.user.lastName}*/}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Sign Out</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

SignedInNavbar.propTypes = {
<<<<<<< HEAD
    user: PropTypes.object
=======
    user: PropTypes.array
>>>>>>> a4bfb70675645179bd7da6f983d45bb0a6bac43d
}

export default SignedInNavbar;