import React from "react";
import { PanelGroup } from "react-bootstrap";
import { UserTaskContainer } from "../components/UserTaskContainer.jsx";

/*CONTAINS DATA FOR INDIVIDUAL CHALLENGE*/

class UserChallengePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            target: this.props.challenge,
            tasks: [],
            activeKey: this.props.challenge.id
        }
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
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
            <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                <h3>{this.props.challenge.title}</h3>
                <p>{this.props.challenge.description}</p> 
                {this.build.Tasks()}
            </PanelGroup>
        );
    }
}

UserChallengePanel.propTypes = {
    activeKey: PropTypes.integer,
    challenge: PropTypes.object
}

export default UserChallengePanel;