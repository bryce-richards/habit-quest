import React, {PropTypes} from "react";
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button} from "react-bootstrap";

class ChallengeDataInput extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getTitleValidationState = this.getTitleValidationState.bind(this);
        this.getDescriptionValidationState = this.getDescriptionValidationState.bind(this);
        this.getPurposeValidationState = this.getPurposeValidationState.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePurposeChange = this.handlePurposeChange.bind(this);

        this.state = {
            titleValue: "",
            descriptionValue: "",
            purposeValue: "",
        }
    }

    onFormSubmit() {
        this.props.onSubmit({
            challengeTitle: this.state.titleValue,
            challengeDescription: this.state.descriptionValue,
            challengePurpose: this.state.purposeValue
        });
    }
<<<<<<< HEAD

    getTitleValidationState() {
        var length = this.state.titleValue.length;
        if (length > 10) {
            return "success";
        } else if (length > 5) {
            return "warning";
        } else if (length > 0) {
            return "error";
        }
    }

    getDescriptionValidationState() {
        var length = this.state.descriptionValue.length;
        if (length > 10) {
            return "success";
        } else if (length > 5) {
            return "warning";
        } else if (length > 0) {
            return "error";
        }
=======
    
    getStatus() {
        (this.state.titleStatus && this.state.descriptionStatus && this.state.purposeStatus) ?
            this.setState(
                {
                    nextButtonClass: "btn-success"
                }, {
                    nextButtonDisabled: false
                })

            :

            this.setState(
                {
                    nextButtonClass: "btn-default"
                }, {
                    nextButtonDisabled: true
                });
    }

    onBlurTitle() {
        // VALIDATE TITLE ENTRY
        // if title is good to go, make status green
        // if title is not good to go, make status red
        this.refs.challengeTitle.value ? 
            this.setClass(
                {
                    titleClass: "has-success"
                }, {
                    titleStatus: true
                })
            
            :
            
            this.setState(
                {
                    titleClass: "has-danger"
                }, {
                    titleStatus: false
        });
            this.getStatus();
>>>>>>> a4bfb70675645179bd7da6f983d45bb0a6bac43d
    }

    getPurposeValidationState() {
        var length = this.state.purposeValue.length;
        if (length > 10) {
            return "success";
        } else if (length > 5) {
            return "warning";
        } else if (length > 0) {
            return "error";
        }
    }

    handleTitleChange(e) {
        this.setState({ titleValue: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ descriptionValue: e.target.value });
    }

    handlePurposeChange(e) {
        this.setState({ purposeValue: e.target.value });
    }

    render() {
        return (
            <form>
<<<<<<< HEAD
                <FormGroup
                    controlId="challengeTitle"
                    validationState={this.getTitleValidationState()}
                >
                    <ControlLabel>
                        Challenge Title
                    </ControlLabel>
                    <FormControl
                            onChange={this.handleTitleChange}
                            value={this.state.titleValue}
                            type="text"
                    />
                    <FormControl.Feedback />
                    <HelpBlock>
                        i.e. "Live Healthy", "Explore the Outdoors",
                        "Write a Story"
                    </HelpBlock>
                </FormGroup>

                <FormGroup
                    controlId="challengeDescription"
                    validationState={this.getDescriptionValidationState()}
                >
                    <ControlLabel>
                        Challenge Description
                    </ControlLabel>
                    <FormControl
                                onChange={this.handleDescriptionChange}
                                className={this.state.descriptionValue}
                                componentClass="textarea"
                    />
                    <FormControl.Feedback />
                    <HelpBlock className="form-text text-muted">
                        Write a little bit about what you hope to
                        accomplish.
                    </HelpBlock>
                </FormGroup>

                <FormGroup
                    controlId="challengePurpose"
                    validationState={this.getPurposeValidationState()}
                >
                    <ControlLabel>
                        Challenge Purpose
                    </ControlLabel>
                        <FormControl
                            onChange={this.handlePurposeChange}
                            value={this.state.purposeValue}
                            type="text"
                    />
                    <FormControl.Feedback />
                    <HelpBlock className="form-text text-muted">
                        Write a little bit about what you hope to
                        accomplish.
                    </HelpBlock>
                </FormGroup>
                <FormGroup>
                    <Button bsStyle="primary" disabled>
=======
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="challengeTitle">
                            Challenge Title
                        </label>
                        <input ref="challengeTitle"
                               onBlur={this.onBlurTitle}
                               type="text"
                               className={`${this.state.titleClass} form-control`}
                        />
                        <small className="form-text text-muted">
                            i.e. "Live Healthy", "Explore the Outdoors",
                            "Write a Story"
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="challengeDescription">
                            Challenge Description
                        </label>
                        <textarea ref="challengeDescription"
                                  onBlur={this.onBlurDescription}
                                  className={`${this.state.descriptionClass} form-control`}>
                        </textarea>
                        <small className="form-text text-muted">
                            Write a little bit about what you hope to
                            accomplish.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="challengePurpose">
                            Challenge Purpose
                        </label>
                        <input ref="challengePurpose"
                               onBlur={this.onBlurPurpose}
                               type="text"
                               className={`${this.state.purposeClass} form-control`}
                        />
                        <small className="form-text text-muted">
                            Write a little bit about what you hope to
                            accomplish.
                        </small>
                    </div>
                </fieldset>
                <div className="modal-footer">
                    <Button className="btn btn-primary disabled">
>>>>>>> a4bfb70675645179bd7da6f983d45bb0a6bac43d
                        Back
                    </Button>
                    <Button onClick={this.onFormSubmit}
                            disabled={this.state.nextButtonDisabled}
                            className={this.state.nextButtonClass}>
                        Next
                    </Button>
                </FormGroup>
            </form>
        );
    }
}

ChallengeDataInput.propTypes = {
    onSubmit: PropTypes.func
};

export default ChallengeDataInput;