import React, {PropTypes} from "react";
var validate = require("validate");

class TaskDataInput extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getStatus = this.getStatus.bind(this);
        this.onBlurNumTasks = this.onBlurNumTasks.bind(this);

        this.state = {
            currentWeek: 1,
            numTasks: 1,
            task: {
                week: 1,
                task: "",
                taskDays: 1
            }
        }
    }

    /* SET THE NUMBER OF TASKS WHEN A NEW VALUE IS SELECTED */

    render() {

        return (
            <form>
                <fieldset>
                    <legend></legend>
                    <div className="form-group">
                        <label>
                            Week {this.state.currentWeek}
                        </label>
                    </div>
                </fieldset>
                <div className="form-group">
                    <div>
                        <input 
                            className="form-control" 
                            ref={"taskTitle"}
                            onBlur={this.onBlurTitle} 
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Days of The Week
                        </label>
                        <select 
                            onBlur={this.addDays}
                            className="form-control" 
                            ref={"numDays"}>
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

