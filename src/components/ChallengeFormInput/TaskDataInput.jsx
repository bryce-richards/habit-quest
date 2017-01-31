import React, {PropTypes} from "react";

class TaskDataInput extends React.Component {


    render() {

        return (
            <fieldset id="week1" className="hidden">
                <div className="form-group">
                    <label htmlFor="week1Tasks">Tasks For The Week</label>
                    <select className="form-control" id="week1Tasks">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <small className="form-text text-muted">Select up to three.</small>
                </div>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="week1task1">Task 1</label>
                        <input className="form-control" id="week1Task1"/>
                        <small className="form-text text-muted">i.e. "No processed sugar", "Ten pushups
                            every
                            morning", "Write 100 Words a Day"
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="week1Task1Days">Days of The Week</label>
                        <select className="form-control" id="week1Task1Days">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <small className="form-text text-muted">Select How Many Days You Want To
                            Complete This Task This Week
                        </small>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="week1Task2">Task 2</label>
                        <input className="form-control" id="week1Task2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="week2Task1Day">Days of The Week</label>
                        <select className="form-control" id="week2Task1Days">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="wee1Task3">Task 3</label>
                        <input className="form-control" id="week1Task3"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="week1Task3Days">Days of The Week</label>
                        <select className="form-control" id="week1Task3Days">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </fieldset>
            </fieldset>
        );
    }

}

export default TaskDataInput;