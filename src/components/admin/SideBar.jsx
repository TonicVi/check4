import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <NavLink to="/admin" className="admin-link1 desktop-link">Add a book</NavLink>
      <NavLink to="/admin/book" className="admin-link2 desktop-link">Manage books</NavLink>
      <NavLink to="/" className="admin-link3 desktop-link">Log out</NavLink>
    </>
  );
}

export default SideBar;
