import React, { Component } from 'react';
import {render} from 'react-dom';

class Signin extends Component {
  render() {
    return (
      <form action="/signin" method="post">
      	<div>
      	<label>Username:</label>
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

export default Signin;
