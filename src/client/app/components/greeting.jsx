import React from 'react';

const Greeting = ({user}) => {
  return (
    <p>Hello, {user.firstName}!</p>
  )
}

export default Greeting;
