import React from "react";
import UserDashboardChallenges from "./UserDashboardChallenges.jsx";
import ModalForm from "./ModalForm.jsx";

import { Grid, Row, Col, Clearfix, Button } from "react-bootstrap";

class UserDashboardBody extends React.Component {

    constructor(props) {
        super(props);

        this.newChallenge = this.newChallenge.bind(this);
        this.modalClose = this.modalClose.bind(this);
        
        this.state = {
            newChallenge: false
        }
    }

    render() {
        return (
            <Row>
                <UserDashboardChallenges />
            </Row>
        );
    }
}

export default UserDashboardBody;