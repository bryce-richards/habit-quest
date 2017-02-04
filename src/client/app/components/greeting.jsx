import React from 'react';

const Greeting = ({user}) => {
  return (
    <h1 className="bahiana text-center" id="greeting-text">Welcome Back, {user.firstName}!</h1>
  )
}

export default Greeting;
