import React, { Component } from 'react';
import {render} from 'react-dom';

class Signin extends Component {
  render() {
    return (
      <form id="signin-form" action="/signin" method="post">
      	<div className="form-group">
        	<label>Email:</label>
        	<input type="text" className="form-control" name="email"/><br/>
      	</div>

      	<div className="form-group">
        	<label>Password:</label>
        	<input type="password" className="form-control" name="password"/>
        </div>

      	<button type="submit" className="btn btn-default">Submit</button>

      </form>
    )
  }
}

export default Signin;
