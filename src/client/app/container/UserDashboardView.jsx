import React from "react";
import SignedInNavbar from "./SignedInNavbar.jsx";
import UserDashboardHeader from "./UserDashboardHeader.jsx";
import UserDashboardBody from "./UserDashboardBody.jsx";

import { Grid, Row, Col, Clearfix } from "react-bootstrap";

class UserDashboardView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newChallenge: false,
            userData: {},
            challenges: [],
            tasks: []
        }
    }

    // getChallenges() {
    //     /* AJAX request */
    //     request.get(/*URL*/);
    // }

    render() {
        return (
            <Grid>
                <Row>
                    <SignedInNavbar />
                </Row>
                <Row>
                    <UserDashboardHeader />
                </Row>
                <Row>
                    <UserDashboardBody />
                </Row>
                {/*
                  <h1>User Dashboard View Component</h1>
                  */}
            </Grid>

        );
    }
}

export default UserDashboardView;
