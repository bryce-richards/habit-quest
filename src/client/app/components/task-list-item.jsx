import React, { Component } from 'react';
import { Panel, Grid, Col, Row, Button, ProgressBar } from "react-bootstrap";
class TaskListItem extends Component {
  constructor(props) {
    super(props);

    this.subtractDay = this.subtractDay.bind(this);
    this.addDay = this.addDay.bind(this);
    
    this.state = {
      weekNum: this.props.task.weekNum,
      taskName: this.props.task.taskName,
      countComplete: this.props.task.countComplete,
      targetComplete: this.props.task.targetComplete
    }
  }

  subtractDay() {
    this.setState({countComplete: this.state.countComplete - 1});
    // api route to update task
  }

  addDay() {
    this.setState({countComplete: this.state.countComplete + 1});
    // api route to update task
  }

  render() {
    return (
       <Panel header={<h2 className="text-center" style={{ "color": "black" }}>{this.state.taskName}</h2>} bsStyle={this.state.countComplete < this.state.targetComplete ? "default" : "success"}>
          <Row>
              <Col lg={12}>
                  <Row>
                      <Col lg={4}>
                        <h4>Week: {this.state.weekNum}</h4>
                      </Col>
                      <Col lg={4}>
                        <h4>Completed: {this.state.countComplete}</h4>
                      </Col>
                       <Col lg={4}>
                        <h4>Target: {this.state.targetComplete}</h4>
                      </Col>
                  </Row>   
                  <Row>
                      <Col lg={1} lgOffset={1}>
                          <Button onClick={this.subtractDay} 
                                  bsSize="small"
                                  bsStyle="danger"
                                  disabled={this.state.countComplete > 0 ? false : true}
                          >
                              <i className="fa fa-minus-circle fa-3x" aria-hidden="true"></i>
                          </Button>
                      </Col>
                          
                      <Col lg={8}>
                          <ProgressBar  
                              active 
                              bsStyle={this.state.countComplete < this.state.targetComplete ? "info" : "success"}
                              min={0} 
                              max={100} 
                              now={Math.round((this.state.countComplete / this.state.targetComplete) * 100)} 
                              label={`${Math.round((this.state.countComplete / this.state.targetComplete) * 100)}%`}
                          />
                      </Col>
                      <Col lg={2}>
                          <Button onClick={this.addDay} 
                                  bsSize="small"
                                  bsStyle={this.state.countComplete < this.state.targetComplete ? "primary" : "success"}
                                  disabled={this.state.countComplete < this.state.targetComplete ? false : true}
                          >
                              <i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
                          </Button>
                      </Col>
                  </Row>
              </Col>
          </Row>
       </Panel> 
      
    )
  }
}

export default TaskListItem;
