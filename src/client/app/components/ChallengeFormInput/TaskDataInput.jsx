import React, {PropTypes} from "react";
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Legend } from "react-bootstrap";

class TaskDataInput extends React.Component {

    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDaysChange = this.handleDaysChange.bind(this);
        this.getTitleValidationState = this.getTitleValidationState.bind(this);

        this.state = {
            currentWeek: this.props.currentWeek,
            titleValue: "",
            numDaysValue: 1,
            titleValid: false,
            numDaysValid: true
        }
    }

    onFormSubmit() {
        this.props.onSubmit({
            taskTitle: this.state.taskTitle,
            numDays: this.state.numDaysValue
        });
    }

    handleTitleChange(e) {
        this.setState({ titleValue: e.target.value })
        if (e.target.value.length >= 6) {
            this.setState({ titleValid: true})
        } else {
            this.setState({ titleValid: false });
        }
    }

    handleDaysChange(e) {
        this.setState({ numDaysValue: e.target.value })
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

    render() {

        return (
            <form>
                <legend>
                    Week {this.props.currentWeek}
                </legend>
                <FormGroup
                    validationState={this.getTitleValidationState()}
                >
                    <ControlLabel>
                        What do you want to accomplish this week?
                    </ControlLabel>
                    <FormControl 
                        onChange={this.handleTitleChange}
                        value={this.state.titleValue} 
                        type="text"
                    />
                    <FormControl.Feedback />
                    <HelpBlock>
                        {this.state.currentWeek === 1 && `i.e. Cook Breakfast`}
                        {this.state.currentWeek === 2 && `i.e. Do 20 Push-ups`}
                        {this.state.currentWeek === 3 && `i.e. Write in my journal`}
                        {this.state.currentWeek === 4 && `i.e. Don't smoke cigarettes`}
                    </HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>
                        Days of The Week
                    </ControlLabel>
                    <FormControl 
                        componentClass="select"
                        onChange={this.handleDaysChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </FormControl>
                    <HelpBlock className="form-text text-muted">
                        Select How Many Days You Want To
                        Complete This Task This Week
                    </HelpBlock>
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.onFormSubmit}
                            disabled={this.state.titleValid ?
                                false : true}
                            bsStyle={this.state.titleValid ?
                                "success" : "danger"}
                    >
                        Next
                    </Button>
                </FormGroup>
            </form>
        );
    }
}

TaskDataInput.propTypes = {
    onSubmit: PropTypes.func,
    currentWeek: PropTypes.string
};

export default TaskDataInput;
