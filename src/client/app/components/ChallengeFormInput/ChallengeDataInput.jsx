import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";


class ChallengeDataInput extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getStatus = this.getStatus.bind(this);
        this.onBlurTitle = this.onBlurTitle.bind(this);
        this.onBlurDescription = this.onBlurDescription.bind(this);
        this.onBlurPurpose = this.onBlurPurpose.bind(this);

        this.state = {
            errors: [],
            backButtonDisabled: true,
            nextButtonClass: "btn-default",
            nextButtonDisabled: true,
            titleClass: "has-default",
            titleStatus: false,
            descriptionClass: "has-default",
            descriptionStatus: false,
            purposeClass: "has-default",
            purposeStatus: false
        }
    }

    onFormSubmit() {
        this.props.onSubmit({
            challengeTitle: this.refs.challengeTitle.value,
            challengeDescription: this.refs.challengeDescription.value,
            challengePurpose: this.refs.challengePurpose.value
        });
    }

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
    }

    onBlurDescription() {
        // VALIDATE TITLE ENTRY
        // if title is good to go, make status green
        // if title is not good to go, make status red
        this.refs.challengeDescription.value ? this.setClass(
                {
                    descriptionClass: "has-success"
                }, {
                    descriptionStatus: true
                })

            :

            this.setState(
                {
                    descriptionClass: "has-danger"
                }, {
                    descriptionStatus: false
        });
        this.getStatus();
    }

    onBlurPurpose() {
        // VALIDATE TITLE ENTRY
        // if title is good to go, make status green
        // if title is not good to go, make status red
        this.refs.challengePurpose.value ?
            this.setClass(
                {
                    purposeClass: "has-success"
                }, {
                    purposeStatus: true
                })

            :

            this.setState(
                {
                    purposeClass: "has-danger"
                }, {
                    purposeStatus: false
        });
        this.getStatus();
    }

    render() {
        return (
            <form>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="challengeTitle">
                            Challenge Title
                        </label>
                        <input ref="challengeTitle"
                               onBlur={this.onBlurTitle}
                               type="text"
                               className={this.state.titleClass + " form-control"}
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
                                  className={this.state.descriptionClass + " form-control"}>
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
                               className={this.state.purposeClass + "form-control"}
                        />
                        <small className="form-text text-muted">
                            Write a little bit about what you hope to
                            accomplish.
                        </small>
                    </div>
                </fieldset>
                <div className="modal-footer">
                    <Button className="btn btn-primary disabled">
                        Back
                    </Button>
                    <Button onClick={this.onFormSubmit}
                            disabled={this.state.nextButtonDisabled}
                            className={this.state.nextButtonClass}>
                        Next
                    </Button>
                </div>
            </form>
        );
    }
}

ChallengeDataInput.propTypes = {
    onSubmit: PropTypes.func
};

export default ChallengeDataInput;