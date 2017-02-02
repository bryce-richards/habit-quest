import React from "react";
import NewChallengeButton from "../components/NewChallengeButton.jsx";
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

    newChallenge() {
        console.log("New Challenge Button Clicked!");
        this.setState({newChallenge: true});
    }

    modalClose() {
        this.setState({newChallenge: false});
    }

    render() {
        return (
            <Row>
                <Button bsStyle="success" onClick={this.newChallenge}>Create a New Challenge</Button>

                <ModalForm 
                    modalOpen={this.state.newChallenge}
                    onClose={this.modalClose} />
            </Row>
        );
    }
}
                // <UserDashboardChallenges />

export default UserDashboardBody;