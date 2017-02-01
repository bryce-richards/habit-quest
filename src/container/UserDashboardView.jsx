import React from "react";

var challenge = {
    challengeId: "",
    challengeTite: "",
    numDays: "",
    completedDays: ""
}

class UserDashboardView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newChallenge: false,
            userData: {
                first: "",
                last: "",
                password: "",
                email: "",
                imageUrl: ""
            },
            challengeIds: []
        }
    }

    render() {
        return (
            <main>
                <UserDashboardHeader />
                <UserDashoardBody />
            </main>

        );
    }
}

export default UserDashboardView;
