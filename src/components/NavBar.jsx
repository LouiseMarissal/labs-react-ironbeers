import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink exact to="/" className="fas fa-home"></NavLink>
    </div>
  );
};
export default NavBar;
