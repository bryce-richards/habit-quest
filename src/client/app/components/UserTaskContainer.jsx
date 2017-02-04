import React from "react";
import { Grid, Row, Col, Clearfix, Panel, ProgressBar } from "react-bootstrap";

/*CONTAINS DATA FOR INDIVIDUAL CHALLENGE*/

class UserTaskContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completedDays: this.props.completedDays,
            target: this.props.numDays
        }
    }

    addDay() {
        this.setState({completedDays: this.state.completedDays + 1});
    }

    subtractDay() {
        this.setState({completedDays: this.state.completedDays - 1});
    }

    render() {

        return (
             <Panel header={task.taskName}>
                <Col lg={12}>
                    <Row>
                        <Col lg={6}>
                            <h3>
                                Week {this.props.week}
                            </h3>
                        </Col>
                        <Col lg={6}>
                            <h3>
                                Target Days: {this.state.target}
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}>
                            <Button onClick={this.subtractDay}
                                    sStyle={this.state.completedDays > 0 ?
                                        "warning" : "danger"}
                                    bsSize="small"
                                    disabled={this.state.completedDays > 0 ?
                                        "false" : "true"}
                            >
                                <i class="fa fa-minus-circle" aria-hidden="true"></i>
                            </Button>
                        </Col>
                        <Col lg={8}>
                            <ProgressBar active min={0} max={this.state.target} now={this.state.completedDays} />
                        </Col>
                        <Col lg={2}>
                            <Button onClick={this.addDay}
                                    bsStyle={this.state.completedDays < this.state.target ?
                                        "primary" : "success"}
                                    bsSize="small"
                                    disabled={this.state.completedDays < 7 ?
                                        "false" : "true"}
                            >
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            </Button>
                        </Col>
                    </Row>
                </Col>
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
