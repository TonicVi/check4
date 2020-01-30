import React from "react";
import { NavLink } from "react-router-dom";
import library from '../images/library.jpg'
import "./welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <NavLink to="/admin" className="welcome-admin" activeClassName="welcome-admin-active">
        admin
      </NavLink>
      <NavLink to="/user" className="welcome-user" activeClassName="welcome-user-active">
        user
      </NavLink>
      <h2 className="welcome-header">What should you read next?</h2>
      <h4 className="welcome-content">You'll never forget with NEXT</h4>
      <img src={library} alt='cozy library' className="welcome-img" />
    </div>
  );
}

export default Welcome;
