import React, { Component } from 'react';
import { Panel, Grid, Col, Row, Button, ProgressBar } from "react-bootstrap";
class TaskListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: this.props.task,
      completedDays: this.props.task.completedDays,
      targetComplete: this.props.task.targetComplete
    }
  }

  subtractDay() {
    this.setState({targetComplete: this.state.targetComplete - 1});
    // api route to update task
  }

  addDay() {
    this.setState({targetComplete: this.state.targetComplete + 1});
    // api route to update task
  }
  render() {
    return (
       <Panel header={this.props.task.taskName} 
              bsStyle={this.state.completedDays < this.state.targetComplete ? "primary" : "success"}>
          <Grid>
              <Row>
                  <Col lg={12}>
                      <Row>
                          <Col lg={4}>
                            <p>Week: {this.props.task.week}</p>
                          </Col>
                          <Col lg={4}>
                            <p>Target: {this.props.task.targetComplete}</p>
                          </Col>
                          <Col lg={4}>
                            <p>Week {this.props.task.countComplete}</p>
                          </Col>
                      </Row>   
                      <Row>
                          <Col lg={2}>
                              <Button onClick={this.subtractDay} 
                                      bsStyle={this.state.completedDays > 0 ? "warning" : "danger"}
                                      disabled={this.state.completedDays > 0 ? "false" : "true"}
                              >
                                  <i className="fa fa-minus-circle fa-3x" aria-hidden="true"></i>
                              </Button>
                          </Col>
                              
                          <Col lg={8}>
                              <ProgressBar  active 
                                  min={0} 
                                  max={this.state.targetComplete} 
                                  now={this.state.completedDays} 
                                  label={this.state.completedDays}
                              />
                          </Col>
                          <Col lg={2}>
                              <Button onClick={this.addDay} 
                                      bsStyle={this.state.completedDays < this.state.targetComplete ? "primary" : "success"}
                                      disabled={this.state.completedDays < 7 ? "false" : "true"}
                              >
                                  <i className="fa fa-minus-circle fa-3x" aria-hidden="true"></i>
                              </Button>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Grid>
       </Panel> 
      
    )
  }
}

export default TaskListItem;
