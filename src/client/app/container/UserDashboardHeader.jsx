import React, { PropTypes } from "react";
import { Grid, Row, Col, Clearfix, Jumbotron } from "react-bootstrap";
import ModalForm from "../container/ModalForm.jsx";
import ReactDOM from "react-dom";
import Greeting from '../components/greeting.jsx';

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
        this.setState({currentState: this.state.currentState + 1})
    }

    render() {
        return (
            <Row>
                <Col lg={12}>


                        <Row>
                            <Col className="text-center">
                                <button id="create-challenge-btn" type="button" className="text-center btn btn-success btn-lg" onClick={this.modalOpen}>Create a Challenge</button>
                            </Col>
                        </Row>

                    <Row>
                        <ModalForm
                            key={this.state.currentState}
                            modalOpen={this.state.newChallenge}
                            onClose={this.modalClose} />
                    </Row>
                </Col>
            </Row>
        );
    }
}

UserHeader.propTypes = {
    user: PropTypes.object
}

export default UserHeader;
