import React, {PropTypes} from "react";
import {Button} from "react-bootstrap";
var validate = require("validate");

class TaskDataInput extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getStatus = this.getStatus.bind(this);
        this.onBlurNumTasks = this.onBlurNumTasks.bind(this);

        this.state = {
            currentWeek: 1
        }
    }

    onFormSubmit() {
        this.props.onSubmit({
            currentWeek: this.state.currentWeek,
            taskTitle: this.refs.taskTitle,
            numDays: this.refs.numDays
        })
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
                    </div>
                </fieldset>
                <div className="form-group">
                    <div>
                        <label>
                            What do you want to accomplish this week?
                        </label>
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
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                        <small className="form-text text-muted">
                            Select How Many Days You Want To
                            Complete This Task This Week
                        </small>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button className={this.state.backButtonDisabled `btn btn-primary`}>
                        Back
                    </Button>
                    <Button onClick={this.onFormSubmit}
                            disabled={this.state.nextButtonDisabled}
                            className={this.state.nextButtonClass `btn`}>
                        {this.state.currentWeek === 4 ? "Submit" : "Next"}
                    </Button>
                </div>
            </form>
        );
    }
}

ChallengeData.propTypes = {
    onSubmit: PropTypes.func
};

export default TaskDataInput;

