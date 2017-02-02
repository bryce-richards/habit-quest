import React from "react";
import Header from "./Header.jsx";
import UserDashboardBody from "./UserDashboardBody.jsx";

var request = require("request");

class UserDashboardView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newChallenge: false,
            userData: {},
            challenges: [],
            tasks: []
        }
    }

    // getChallenges() {
    //     /* AJAX request */
    //     request.get(/*URL*/);
    // }

    render() {
        return (
            <div>
                <Header />
                <UserDashboardBody />
            </div>

        );
    }
}

export default UserDashboardView;
