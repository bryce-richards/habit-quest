import React, {PropTypes} from "react";
import ChallengeDataInput from "../components/ChallengeFormInput/ChallengeDataInput.jsx";
import {Modal, Button} from "react-bootstrap";


class ModalForm extends React.Component {

    constructor(props) {
        super(props);

        this.onChallengeDataSubmit = this.onChallengeDataSubmit.bind(this);
        this.getModalFormComponent = this.getModalFormComponent.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
        this.state = {
            modalOpen: this.props.modalOpen,
            currentForm: 1,
            newChallenge: {}
        }
    }

    // formValues IS EQUAL TO THE PASSED IN INFORMATION ON THE CHILD'S onFormSubmit FUNCTION
    onChallengeDataSubmit(formValues) {
        let updatedChallenge = {};
        updatedChallenge.title = formValues.challengeTitle;
        updatedChallenge.description = formValues.challengeDescription;
        updatedChallenge.purpse = formValues.challengePurpse;
        this.setState({newChallenge: updatedChallenge});
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

    closeModal() {
        this.setState({ modalOpen: false });
        this.props.onClose(false);
    }

    render() {
        return (
            <Modal className="fade" show={this.state.modalOpen} tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLongTitle"
                 aria-hidden="true">
                <Modal.Dialog role="document">

                    <Modal.Content>

                        <Modal.Header>

                            {/* WHEN USER CLICKS TO CLOSE, CALL PROP FUNCTION onClose */}
                            <Button onClick={this.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </Button>

                            {/* MODAL HEADER TEXT*/}
                            <h5 className="modal-title">New 4 Week Challenge</h5>
                        </Modal.Header>

                        <Modal.Body>
                            {this.getModalFormComponent}
                        </Modal.Body>

                    </Modal.Content>
                </Modal.Dialog>
            </Modal>
        );

    }
}

ModalForm.propTypes = {
    modalOpen: PropTypes.bool,
    onClose: PropTypes.func
}

export default ModalForm;
