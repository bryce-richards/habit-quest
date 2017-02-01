import React from "react";
import { Button } from "react-bootstrap";
import ModalForm from "../container/ModalForm.jsx";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.state = {
            showModal: false
        }
    }

    openModal() {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Live Healthy</h1>
                <p>By cutting out processed foods, cooking more, and exercising, I can lead a healthier lifestyle</p>
                <p>This will lead to a more fulfilling life and give me more energy</p>
                <p><Button onClick={this.openModal} className="btn btn-primary btn-lg" id="newChallenge">Add a Task</Button></p>
                < />
                <ModalForm showModal={this.state.showModal}/>
            </div>
        );
    }
}

export default Header;