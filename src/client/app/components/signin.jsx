import React, { Component } from 'react';
import {render} from 'react-dom';

class Signin extends Component {

  render() {
    return (
			<div id="signin-container">
				<br />
				<br />
				<br />
        <h2 className="text-center dosis">Log in to Get Started!</h2>
				<form className="drop-shadow col-lg-4 col-lg-offset-4" id="signin-form" action="/signin" method="post">
					<div className="form-group">
						<label className="arsenal">Email:</label>
						<input type="text" className="form-control" name="email"/><br/>
					</div>

					<div className="form-group">
						<label className="arsenal">Password:</label>
						<input type="password" className="form-control" name="password"/>
					</div>

					<button type="submit" className="btn btn-success">Submit</button>

				</form>
			</div>
    )
  }
}

export default Signin;
