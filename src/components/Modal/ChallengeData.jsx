import React, {PropTypes} from "react";


class ChallengeData extends React.Component {

    constructor(props) {
        super(props);

        this.onBlur = this.onBlur.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            errors: [],
            completed: false
        }
    }

    onFormSubmit() {
        this.props.onSubmit({
           challengTitle: this.refs.challengeTitle.value
        });
    }

    onBlur() {
        console.log("On Blur: ", arguments);
        console.log(this.refs.challengeTitle.value);
    }

    render() {
        return (
            <form>
                <fieldset id="challengeHeader">
                    <div className="form-group">
                        <label htmlFor="challengeTitle">Challenge Title</label>
                        <input ref="challengeTitle" onBlur={this.onBlur} type="text" className="form-control" id="challengeTitle"/>
                        <small className="form-text text-muted">i.e. "Live Healthy", "Explore the Outdoors",
                            "Write a Story"
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="challengeDescription">Challenge Description</label>
                        <textarea className="form-control" id="challengeDescription"></textarea>
                        <small className="form-text text-muted">Write a little bit about what you hope to
                            accomplish.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="challengePurpose">Challenge Purpose</label>
                        <input type="text" className="form-control" id="challengePurpose"/>
                        <small className="form-text text-muted">Write a little bit about what you hope to
                            accomplish.
                        </small>
                    </div>
                </fieldset>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary disabled">Back</button>
                    <button onClick={this.onFormSubmit} type="button" disabled={!this.state.completed} className="btn btn-success">Next</button>
                </div>
            </form>
        );
    }
}

ChallengeData.propTypes = {
    onSubmit: PropTypes.func
};

export default ChallengeData;
