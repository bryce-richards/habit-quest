import React from "react";
// import { UserChallengeContainer } from "./UserChallengeContainer.jsx";
// var request = require("request");

class UserDashboardChallenges extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            challenges: []
        }
    }

    // buildChallenges() {
    //     return this.state.challenges.map((challenge, i) => {
    //         return <UserChallengeContainer
    //             key={i}
    //             id={challenge.id}
    //             title={challenge.title}
    //             numDays={challenge.numDays}
    //             completedDays={challenge.completedDays}
    //         />;
    //     });
    // }

    render() {
        return (
            <div>
                {/*this.buildChallenges()*/}
            </div>
        );
    }
}

// UserDashboardChallenges.propTypes = {
//     userChallenges: PropTypes.object
// };

export default UserDashboardChallenges;
