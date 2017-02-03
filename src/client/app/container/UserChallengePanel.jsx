import React from "react";
import { Grid, Row, Col, Clearfix, Panel, ProgressBar } from "react-bootstrap";

/*CONTAINS DATA FOR INDIVIDUAL CHALLENGE*/

class UserChallengePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            target: this.props.challenge,
            tasks: []
        }
    }

    buildTasks() {
         return this.state.tasks.map((task, i) => {
            return <UserTaskContainer
                key={i}
                id={task.id}
                week={task.weekNum}
                title={task.taskName}
                numDays={task.targetComplete}
                completedDays={task.completedDays}
            />;
        });
    }
    render() {

        return (
            <Panel>
            </Panel>
        );
    }
}

export default UserChallengePanel;