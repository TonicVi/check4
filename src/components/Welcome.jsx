import React from "react";
import { NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <>
    <NavLink to='/admin'>admin</NavLink>
    <NavLink to ='/user'>user</NavLink>
    <div className="welcome-titles">
      <h2>What should you read next?</h2>
      <h4>You'll never forget with NEXT</h4>
    </div>
  </>
  );
}

export default Welcome;