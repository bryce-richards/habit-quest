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