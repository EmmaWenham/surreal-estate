import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const Navbar = ({ userID, onLogin, onLogout }) => {
  return (
    <div className="NavBar">
      <img
        className="surrealEstateLogo"
        src="https://mcrcodes.s3.eu-west-2.amazonws.com/course/surreal-estate/logo.png"
        alt="surrealEstateLogo"
      />
      <ul className="navbar-links">
        {userID && (
          <div className="navbar-links">
            <Link className="navbar-links-item" to="/View Properties">
              View Properties
            </Link>
            <Link className="navbar-links-item" to="/add Property">
              Add Property
            </Link>
          </div>
        )}
        {userID ? (
          <button type="button" className="navbar-sign-out" onClick={onLogout}>
            Sign Out
          </button>
        ) : (
          <FacebookLogin
            appId="1718923228476668"
            // autoLoad={true}
            fields="name,email,picture"
            cssClass="navbar-facebook-button"
            callback={onLogin}
          />
        )}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string,
};
Navbar.defaultProps = {
  userID: "",
};
export default Navbar;
