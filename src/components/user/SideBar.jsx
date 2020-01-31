import React from "react";
import { NavLink } from "react-router-dom";

function SideBarUser() {
  return (
    <>
      <NavLink to="/user" className="admin-link1 desktop-link">All the possibilities</NavLink>
      <NavLink to="/user/nextbooks" className="admin-link2 desktop-link">My Next Readings</NavLink>
      <NavLink to="/" className="admin-link3 desktop-link">Log out</NavLink>
    </>
  );
}

export default SideBarUser;
