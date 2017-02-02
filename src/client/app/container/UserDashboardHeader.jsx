import React, { PropTypes } from "react";
import { Grid, Row, Col, Clearfix, Button, Jumbotron } from "react-bootstrap";
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
            <Row>
                <Col lg={12}>
                    <Jumbotron>
                        <Row>
                            <Col lg={12}>
                                <h1 className="text-center">Welcome Back!</h1>
                            </Col>
                            <Col lg={2} lgOffset={5} md={4} mdOffset={4} sm={8} smOffset={2} xs={12}>
                                <button type="button" className="text-center btn btn-success btn-block" onClick={this.modalOpen}>Create a Challenge</button>
                            </Col>
                        </Row>
                    </Jumbotron>
                    <Row>
                        <ModalForm 
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