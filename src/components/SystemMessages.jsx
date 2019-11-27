import React from "react";
import PropTypes from "prop-types";

export function SuccessMessage({ message, handleClose }) {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <p>{message}</p>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={handleClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

SuccessMessage.propTypes = {
  message: PropTypes.string,
  handleClose: PropTypes.func
};

export function ErrorMessage({ message, handleClose }) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <h4 className="alert-heading">Errors:</h4>
      <p>{message}</p>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={handleClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  handleClose: PropTypes.func
};
