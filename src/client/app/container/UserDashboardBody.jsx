import React from "react";
import UserDashboardChallenges from "./UserDashboardChallenges.jsx";
import ModalForm from "./ModalForm.jsx";

import { Grid, Row, Col, Clearfix, Button } from "react-bootstrap";

class UserDashboardBody extends React.Component {

    render() {
        return (
            <Row>
                <UserDashboardChallenges />
            </Row>
        );
    }
}

export default UserDashboardBody;