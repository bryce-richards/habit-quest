import React from "react";
import { Button } from "react-bootstrap"

class NewChallengeButton extends React.Component {
    render() {
        return (
            <Button {...this.props} bsStyle="success">Create a New Challenge</Button>
        );
    }
}

export default NewChallengeButton;