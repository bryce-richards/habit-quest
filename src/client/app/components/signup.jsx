import React, { Component } from 'react';
import {render} from 'react-dom';

class SignupForm extends Component {
  render() {
    return (
      <form action="/signup" method="post">
      	<div>
        	<label>First Name:</label>
        	<input type="text" name="firstName"/><br/>
      	</div>
      	<div>
        	<label>Last Name:</label>
        	<input type="text" name="lastName"/><br/>
      	</div>
        <div>
          <label>Username:</label>
          <input type="text" name="userName"/><br/>
        </div>
      	<div>
        	<label>Email:</label>
        	<input type="text" name="email"/><br/>
      	</div>
      	<div>
        	<label>Password:</label>
        	<input type="password" name="password"/>
      	</div>
      	<div>
        	<label>Image Link:</label>
        	<input type="text" name="imageUrl"/>
      	</div>
      	<div>
        	<input type="submit" value="Submit"/>
      	</div>
      </form>
    )
  }
}

export default SignupForm;
