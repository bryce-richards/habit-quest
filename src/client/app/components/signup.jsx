import React, { Component } from 'react';
import {render} from 'react-dom';

class SignupForm extends Component {
  render() {
    return (
      <form action="/signup" method="post">
      	<div>
        	<label>Email:</label>
        	<input type="text" name="email"/><br/>
      	</div>
      	<div>
        	<label>Password:</label>
        	<input type="password" name="password"/>
      	</div>
      	<div>
        	<input type="submit" value="Submit"/>
      	</div>
      </form>
    )
  }
}

export default SignupForm;
