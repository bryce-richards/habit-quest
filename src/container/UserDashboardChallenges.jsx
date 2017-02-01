import React from "react";
import { UserChallengeContainer } from "./UserChallengeContainer.jsx";

class UserDashboardChallenges extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            challenges: []
        }
    }

    buildChallenges() {
        var challenges = [];
        for (vari = 0; i < this.state.challenges.length; i++) {
            challenges.push(
                <UserChallengeContainer 
                    key={i} 
                    id={this.state.challenges[i].id} 
                    title={this.state.challenges[i].title} 
                    numDays={this.state.challenges[i].numDays}
                    completedDays={this.state.challenges[i].completedDays} 
                />
            )
        }
        return challenges;
    }

    render() {
        return (
            {buildChallenges}
        );
    }
}

UserDashboardChallenges.propTypes = {
    userChallenges: PropTypes.object
};

export default UserDashboardChallenges;
