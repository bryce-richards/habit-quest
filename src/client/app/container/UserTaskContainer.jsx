import React from "react";
import { Grid, Row, Col, Clearfix, Panel, ProgressBar } from "react-bootstrap";

/*CONTAINS DATA FOR INDIVIDUAL CHALLENGE*/

class UserTaskContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            now: 0,
            target: this.props.challenge,
            task: []
        }
    }

    render() {

        return (
             <Panel header={task.taskName} eventKey={this.props.key}>
                <Row>
                    <Col lg={6}>
                        <h3>
                            Week {this.tasks[i].taskName}
                        </h3>
                    </Col>
                    <Col lg={6}>
                        <h3>
                            Target Days: {this.tasks[i].targetComplete}
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <Button bsStyle="dabger" bsSize="small">
                            <i class="fa fa-minus-circle" aria-hidden="true"></i>
                        </Button>
                    </Col>
                    <Col lg={8}>
                        <ProgressBar ref="progressBar" active min={0} max={7} now={now} />
                    </Col>
                    <Col lg={2}>
                        <Button bsStyle="dabger" bsSize="small">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </Button>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

ModalForm.propTypes = {
    key: PropTypes.number,
    id: PropTypes.number,
    week: PropTypes.number,
    title: PropTypes.string,
    numDays: PropTypes.number,
    completedDays: PropStypes.number
}

export default UserTaskContainer;