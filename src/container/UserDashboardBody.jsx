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



    render() {
        return (
            <div>
                <NewChallengeButton onClick={this.setState/>
                <UserDashboardChallenges />
            </div>
        );
    }
}

UserDashboardBody.propTypes = {

};

export default UserDashboardBody;
