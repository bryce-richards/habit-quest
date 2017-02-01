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
        return this.state.challenges.map((challenge, index) => {
            return <UserChallengeContainer
                key={index}
                id={challenge.id}
                title={challenge.title}
                numDays={challenge.numDays}
                completedDays={challenge.completedDays}
            />;
        });
    }

    render() {
        return (
            {this.buildChallenges()}
        );
    }
}

UserDashboardChallenges.propTypes = {
    userChallenges: PropTypes.object
};

export default UserDashboardChallenges;
