import React, { PropTypes } from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";

import ChallengeDataInput from "../components/ChallengeFormInput/ChallengeDataInput.jsx";
import TaskDataInput from "../components/ChallengeFormInput/TaskDataInput.jsx";

class ModalForm extends React.Component {

    constructor(props) {
        super(props);

        this.onChallengeDataSubmit = this.onChallengeDataSubmit.bind(this);
        this.onTaskDataSubmit = this.onTaskDataSubmit.bind(this);
        this.getModalFormComponent = this.getModalFormComponent.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.postData = this.postData.bind(this);
        
        this.state = {
            currentForm: 1,
            newChallenge: {},
            currentWeek: 1
        }
    }

    // formValues IS EQUAL TO THE PASSED IN INFORMATION ON THE CHILD'S onFormSubmit FUNCTION
    onChallengeDataSubmit(formValues) {
        var updatedChallenge = this.state.newChallenge;
        updatedChallenge.title = formValues.challengeTitle;
        updatedChallenge.description = formValues.challengeDescription;
        updatedChallenge.purpsoe = formValues.challengePurpse;
        this.setState({newChallenge: updatedChallenge});
        this.setState({currentForm: this.state.currentForm + 1});
    }

    onTaskDataSubmit(formValues) {
        console.log("Submitting Task Data...");
        var updatedChallenge = this.state.newChallenge;

        if(!updatedChallenge.weeks) {
            updatedChallenge.weeks = [];
        }
        updatedChallenge.weeks.push({
            week: formValues.currentWeek,
            task: formValues.taskTitle,
            days: formValues.numDays
        });
        this.setState({newChallenge: updatedChallenge});
        this.setState({currentForm: this.state.currentFrom + 1});
        this.setState({currentWeek: this.state.currentWeek});
    }
    
    postData() {
        /* POST NEW CHALLENGE TO DATABASE */
        this.closeModal();
    }
    
    getModalFormComponent() {
        switch(this.state.currentForm) {
            case 1:
                return <ChallengeDataInput key={this.state.currentForm} onSubmit={this.onChallengeDataSubmit} />;
            case 2:
                return <TaskDataInput currentWeek={this.state.currentWeek} key={this.state.currentWeek} onSubmit={this.onTaskDataSubmit} />;
            case 3:
                return <TaskDataInput currentWeek={this.state.currentWeek} key={this.state.currentWeek} onSubmit={this.onTaskDataSubmit} />;
            case 4:
                return <TaskDataInput currentWeek={this.state.currentWeek} key={this.state.currentWeek} onSubmit={this.onTaskDataSubmit} />;
            case 5:
                return <TaskDataInput currentWeek={this.state.currentWeek} key={this.state.currentWeek} onSubmit={this.onTaskDataSubmit} />;
            case 6:
                return this.postData();
        }
        return null;
    }

    closeModal() {
        this.props.onClose();

    }

    render() {
        return (
            <Modal className="fade" show={this.props.modalOpen} tabIndex="-1" onHide={this.props.onClose}>

                <Modal.Header closeButton>

                    {/* MODAL HEADER TEXT*/}
                    <Modal.Title>New 4 Week Challenge</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this.getModalFormComponent()}
                </Modal.Body>

            </Modal>
        );
    }
}

ModalForm.propTypes = {
    modalOpen: PropTypes.bool,
    onClose: PropTypes.func
}

export default ModalForm;