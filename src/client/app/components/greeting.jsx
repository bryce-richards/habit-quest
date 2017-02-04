import React from 'react';

const Greeting = ({user}) => {
  return (
    <h2>Welcome Back, {user.firstName}!</h2>
  )
}

export default Greeting;
