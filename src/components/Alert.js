import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  if (!message) return null;
  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Alert;

Alert.PropTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};
