import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import ChallengeDataInput from "../components/ChallengeFormInput/ChallengeDataInput.jsx";
import TaskDataInput from "../components/ChallengeFormInput/TaskDataInput.jsx";

var axios = require("axios");

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
        updatedChallenge.purpose = formValues.challengePurpose;
        this.setState({newChallenge: updatedChallenge});
        this.setState({currentForm: this.state.currentForm + 1});
    }

    onTaskDataSubmit(formValues) {
        console.log("Submitting Task Data...", formValues);
        var updatedChallenge = this.state.newChallenge;
        updatedChallenge.tasks = formValues;
        this.setState({newChallenge: updatedChallenge});
        this.setState({currentForm: this.state.currentForm + 1});
    }

    postData() {
        console.log("Your New Challenge is: ", this.state.newChallenge);
        var that = this;

        axios.post('/api/challenge',
        {
            title: this.state.newChallenge.title,
            description: this.state.newChallenge.description,
            purpose: this.state.newChallenge.purpose
        })
        .then((returnedChallenge) => {
            var challengeId = returnedChallenge.data.data.id;
            var weeksData = that.state.newChallenge.tasks
            console.log("tasks: ", weeksData);
            for (var i = 0; i < weeksData.length; i++) {
                axios.post('/api/task/' + challengeId, {
                    challengeId: challengeId,
                    taskName: weeksData[i].task,
                    targetComplete: weeksData[i].numDays,
                    weekNum: weeksData[i].week
                })
                .catch((e) => {
                    return e;
                });
            }
        })
        .then(()  => {
            // this.closeModal();
            
        }).catch((e) => {
            return e
        });
    }

    getModalFormComponent() {
        console.log("Current Page: ", this.state.currentForm);
        switch(this.state.currentForm) {
            case 1:
                return <ChallengeDataInput onSubmit={this.onChallengeDataSubmit} />;
            case 2:
                return <TaskDataInput onSubmit={this.onTaskDataSubmit} />;
            case 3:
                {this.postData()};
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
