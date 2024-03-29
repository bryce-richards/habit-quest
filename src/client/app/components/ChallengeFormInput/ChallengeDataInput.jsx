import React, {PropTypes} from "react";
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from "react-bootstrap";

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
            titleValid: false,
            descriptionValid: false,
            purposeValid: false
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
        if (length > 6) {
            return "success";
        } else if (length > 3) {
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
        this.setState({ titleValue: e.target.value })
        if (e.target.value.length >= 6) {
            this.setState({ titleValid: true})
        } else {
            this.setState({ titleValid: false });
        }
    }

    handleDescriptionChange(e) {
        this.setState({ descriptionValue: e.target.value });
        if (e.target.value.length >= 10) {
            this.setState({ descriptionValid: true})
        } else {
            this.setState({ descriptionValid: false });
        }
    }

    handlePurposeChange(e) {
        this.setState({ purposeValue: e.target.value });
        if (e.target.value.length >= 10) {
            this.setState({ purposeValid: true})
        } else {
            this.setState({ purposeValid: false });
        }
    }

    render() {
        return (
            <form>
                <FormGroup
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
                    validationState={this.getDescriptionValidationState()}
                >
                    <ControlLabel>
                        Challenge Description
                    </ControlLabel>
                    <FormControl
                                onChange={this.handleDescriptionChange}
                                value={this.state.descriptionValue}
                                componentClass="textarea"
                    />
                    <FormControl.Feedback />
                    <HelpBlock>
                        Write a little bit about what you hope to
                        accomplish.
                    </HelpBlock>
                </FormGroup>

                <FormGroup
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
                    <HelpBlock>
                        Why is accomplishing this important to you?
                    </HelpBlock>
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.onFormSubmit}
                            disabled={this.state.titleValid && this.state.descriptionValid && this.state.purposeValid ?
                                false : true}
                            bsStyle={this.state.titleValid && this.state.descriptionValid && this.state.purposeValid ?
                                "success" : "danger"}
                    >
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