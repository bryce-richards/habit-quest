import React, { Component } from 'react';
import {render} from 'react-dom';

class SignupForm extends Component {
  render() {
    return (
      <form id="signup-form" className="drop-shadow col-lg-4 col-lg-offset-4" action="/signup" method="post">
      	<div className="form-group">
        	<label>First Name:</label>
        	<input type="text" name="firstName" className="form-control"/><br/>
      	</div>
      	<div className="form-group">
        	<label>Last Name:</label>
        	<input type="text" name="lastName" className="form-control"/><br/>
      	</div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="userName" className="form-control"/><br/>
        </div>
      	<div className="form-group">
        	<label>Email:</label>
        	<input type="text" name="email" className="form-control"/><br/>
      	</div>
      	<div className="form-group">
        	<label>Password:</label>
        	<input type="password" name="password" className="form-control"/>
      	</div>


        <button type="submit" className="btn btn-default">Submit</button>

      </form>
    )
  }
}

export default SignupForm;
