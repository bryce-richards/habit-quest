import React from "react";
import UserDashboardChallenges from "./UserDashboardChallenges.jsx";
import ModalForm from "./ModalForm.jsx";

import { Grid, Row, Col, Clearfix, Button } from "react-bootstrap";

class UserDashboardBody extends React.Component {

<<<<<<< HEAD
=======
    constructor(props) {
        super(props);

        this.newChallenge = this.newChallenge.bind(this);
        this.modalClose = this.modalClose.bind(this);
        
        this.state = {
            newChallenge: false
        }
    }

>>>>>>> a4bfb70675645179bd7da6f983d45bb0a6bac43d
    render() {
        return (
            <Row>
                <UserDashboardChallenges />
            </Row>
        );
    }
}

export default UserDashboardBody;