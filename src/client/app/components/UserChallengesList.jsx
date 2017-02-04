import React from "react";
import { Grid, Row, Col, Clearfix, Panel, ProgressBar } from "react-bootstrap";
import UserChallengePanel from "./UserChallengeContainer";

/*PANEL GROURP FOR ALL CHALLENGES*/

class UserChallengesList extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            activeKey: "1",
            challenges: []
        }
    }

    handleSelect(activeKey) {
        this.setState({activeKey});
    }

    addChallenges() {
        this.props.challenges.map((challenge, i) => {
            return (
                <UserChallengePanel
                challenge={challenge} />
            );
        });
    }

    render() {
        return (
            <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                {this.addChallenges()}
            </PanelGroup>
        );
    }
}

export default UserChallengesList;
