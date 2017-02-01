import React from "react";
import { NewChallengeButton } from "../components/NewChallengeButton.jsx";
import { UserDashboardChallenges } from "./UserDashboardChallenges.jsx";

class UserDashboardBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }
    }

    createChallenge() {
        this.setState({openModal: true});
    }

    onCloseModal(state) {
        this.setState({openModal: state});
    }

    render() {
        return (
            <div>
                <NewChallengeButton onSubmit={this.createChallenge} />
                <Modal 
                    modalOpen={this.state.modalOpen} 
                    onClose={this.onCloseModal} 
                />
                <UserDashboardChallenges /> 
            </div>
        );
    }
}

UserDashboardBody.propTypes = {

};

export default UserDashboardBody;
