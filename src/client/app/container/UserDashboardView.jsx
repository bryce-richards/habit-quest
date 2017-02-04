import React from "react";
import SignedInNavbar from "./SignedInNavbar.jsx";
import UserDashboardHeader from "./UserDashboardHeader.jsx";
import UserDashboardBody from "./UserDashboardBody.jsx";
// import Greeting from "../components/greeting.jsx";

import { Grid, Row, Col, Clearfix } from "react-bootstrap";
var axios = require("axios");

class UserDashboardView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: []
        }
    }

    componentWillMount() {
        this.getUser();
    }

    // GET USER DATA
    getUser() {

        var that = this;

        axios.get('/api/user').then((res) => {
            var user = res.data.data;
            console.log(user);
            that.setState({
                user: user
            });
            }).catch((e) => {
            return e
        });
    }

    render() {
        return (

                <Row>
                    <UserDashboardHeader />
                </Row>


        );
    }
}

export default UserDashboardView;
