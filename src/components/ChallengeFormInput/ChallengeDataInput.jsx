import React, {PropTypes} from "react";


class ChallengeData extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onBlurTitle = this.onBlurTitle.bind(this);
        this.onBlurDescription = this.onBlurDescription(this);
        this.onBlurPurpose = this.onBlurPurpose(this);

        this.state = {
            errors: [],
            completed: false,
            titleStatus: "has-default",
            descriptionStatus: "has-default",
            purposeStatus: "has-default"
        }
    }

    onFormSubmit() {
        this.props.onSubmit({
            challengeTitle: this.refs.challengeTitle.value,
            challengeDescription: this.refs.challengeDescription.value,
            challengePurpose: this.refs.challengePurpose.value
        });
    }

    onBlurTitle() {
        // VALIDATE TITLE ENTRY
        // if title is good to go, make status green
        // if title is not good to go, make status red
        this.refs.challengeTitle.value ? this.setState("has-success") : this.setState({titleStatus: "has-danger"})
    }

    onBlurDescription() {

    }

    onBlurPurpose() {

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
                               className="form-control"
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
                                  className={this.state.titleStatus} "form-control">
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
                               className={this.state.descriptionStatus}"form-control"
                        />
                        <small className="form-text text-muted">
                            Write a little bit about what you hope to
                            accomplish.
                        </small>
                    </div>
                </fieldset>
                <div className="modal-footer">
                    <button type="button"
                            className="btn btn-primary disabled">
                        Back
                    </button>
                    <button onClick={this.onFormSubmit}
                            type="button"
                            disabled={!this.state.completed}
                            className={this.state.purposeStatus} "btn btn-success">
                        Next
                    </button>
                </div>
            </form>
        );
    }
}

ChallengeData.propTypes = {
    onSubmit: PropTypes.func
};

export default ChallengeData;
