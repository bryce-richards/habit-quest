import React, {PropTypes} from "react";


class TaskDataInput extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getStatus = this.getStatus.bind(this);
        this.onBlurNumTasks = this.onBlurNumTasks.bind(this);

        this.state = {
            currentWeek: 1,
            week1Tasks: 1,
            week2Tasks: 2,
            week3Tasks: 3,
            week4Tasks: 4
        }
    }

    onBlurNumTasks() {
        switch(this.state.currentWeek) {
            case 1:
                this.setState({week1Tasks: this.refs.numTasks});
                break;
            case 2:
                this.setState({week2Tasks: this.refs.numTasks});
                break;
            case 3:
                this.setState({week3Tasks: this.refs.numTasks});
                break;
            case 4:
                this.setState({week4Tasks: this.refs.numTasks});
                break;
        }

    }

    render() {

        return (
            <form>
                <fieldset>
                    <legend></legend>
                    <div className="form-group">
                        <label>
                            Week {this.state.currentWeek}
                        </label>
                        <select ref="numTasks"
                                onBlur={this.onBlurNumTasks}
                                className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <small className="form-text text-muted">
                            Select up to three.
                        </small>
                    </div>

                    <div className="form-group">
                        <div>
                            <label>
                                Week 1
                            </label>
                            <input className="form-control" id="week1Task1"/>
                            <small className="form-text text-muted">i.e. "No processed sugar", "Ten pushups
                                every
                                morning", "Write 100 Words a Day"
                            </small>
                        </div>
                        <div className="form-group">
                            <label>
                                Days of The Week
                            </label>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <small className="form-text text-muted">
                                Select How Many Days You Want To
                                Complete This Task This Week
                            </small>
                        </div>
                    </div>

                    <div className="form-group hidden">
                        <div>
                            <label>
                                Week 2
                            </label>
                            <input className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>
                                Days of The Week
                            </label>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <small className="form-text text-muted">
                                Select How Many Days You Want To
                                Complete This Task This Week
                            </small>
                        </div>
                    </div>

                    <div className="form-group hidden">
                        <div>
                            <label>
                                Week 3
                            </label>
                            <input className="form-control" />
                            <small className="form-text text-muted">
                            </small>
                        </div>
                        <div className="form-group">
                            <label>
                                Days of The Week
                            </label>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <small className="form-text text-muted">
                                Select How Many Days You Want To
                                Complete This Task This Week
                            </small>
                        </div>
                    </div>
                </fieldset>
                <div className="modal-footer">
                    <button type="button"
                            className={this.state.backButtonDisabled `btn btn-primary`}>
                        Back
                    </button>
                    <button onClick={this.onFormSubmit}
                            type="button"
                            disabled={this.state.nextButtonDisabled}
                            className={this.state.nextButtonClass `btn`}>
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

export default TaskDataInput;

