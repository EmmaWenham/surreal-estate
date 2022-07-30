import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img
        className="logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="estate-logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a property</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
