import React, { Link } from "react";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link exact to="/">
        <i class="fas fa-home"></i>
      </Link>
    </div>
  );
};
export default NavBar;
