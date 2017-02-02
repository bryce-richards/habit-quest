import React, { PropTypes } from "react";
import { Button } from "react-bootstrap";
import ModalForm from "../container/ModalForm.jsx";

class UserHeader extends React.Component {

     constructor(props) {
        super(props);

        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
        
        this.state = {
            newChallenge: false
        }
    }

    modalOpen() {
        console.log("New Challenge Button Clicked!");
        this.setState({newChallenge: true});
    }

    modalClose() {
        this.setState({newChallenge: false});
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome Back!</h1>
                <Button bsStyle="success" onClick={this.modalOpen}>Create a New Challenge</Button>
                <ModalForm 
                    modalOpen={this.state.newChallenge}
                    onClose={this.modalClose} />
            </div>
        );
    }
}

UserHeader.propTypes = {
    user: PropTypes.object
}

export default UserHeader;