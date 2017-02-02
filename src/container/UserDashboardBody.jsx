import React from "react";
import { NewChallengeButton } from "../components/NewChallengeButton.jsx";
import { UserDashboardChallenges } from "./UserDashboardChallenges.jsx";

class UserDashboardBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newChallenge: false
        }
    }

    newChallenge() {
        this.setState({newChallenge: true});
    }

    modalClose() {
        this.setState({newChallenge: false});
    }

    render() {
        return (
            <div>
                <NewChallengeButton onClick={this.newChallenge} />
                <ModalForm 
                    modalOpen={this.state.newChallenge}
                    onClose={this.modalClose} />
                <UserDashboardChallenges />
            </div>
        );
    }
}

export default UserDashboardBody;