import React, {PropTypes} from "react";
import ChallengeDataInput from "../components/ChallengeFormInput/ChallengeDataInput.jsx";
import {Modal, Button} from "react-bootstrap";


class ModalForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentForm: 1,
            newChallenge: {}
        }
    }
    // formValues IS EQUAL TO THE PASSED IN INFORMATION ON THE CHILD'S onSubmit FUNCTION


    onChallengeDataSubmit(formValues) {
        console.log("Form Submitted", formValues);
        console.log(arguments);
        this.setState({newChallenge: {/* Add to current new Challenge Object*/}});
        this.setState({currentForm: this.state.currentForm + 1});
    }

    getModalFormComponent() {
        switch(this.state.currentForm) {
            case 1:
                return <ChallengeDataInput onSubmit={this.onChallengeDataSubmit} />;
            case 2:
                return <WeekDataInput onSubmit={this.onChallengeWeekSubmit} />;
        }
        return null;

    }

    render() {
        return (
            <Modal className="fade" show={this.props.showModal} id="challengeModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLongTitle"
                 aria-hidden="true">
                <Modal.Dialog role="document">

                    <Modal.Content className="modal-content">

                        <Modal.Header className="modal-header">
                            <Button className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </Button>
                            <h5 className="modal-title">New Challenge</h5>
                        </Modal.Header>

                        <Modal.Body>
                            {this.getModalFormComponent()}
                        </Modal.Body>

                    </Modal.Content>
                </Modal.Dialog>
            </Modal>
        );

    }
}

export default ModalForm;
