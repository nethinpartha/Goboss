import React from "react";
import PropTypes from "prop-types";

class SignUpLoginModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50,
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: "0 auto",
    };

    return (
      <div className="backdrop" style={{ backdropStyle }}>
        <div className="modal" style={{ modalStyle }}>
          <form name="form">
            <div className="form-group">
              <input placeholder="Email" type="text" name="email" />
            </div>
            <div className="form-group">
              <input placeholder="Password" type="password" name="password" />
            </div>
            <div className="forgot-password-cont mb-3">Forgot Password?</div>
            <div className="form-group">
              <button className="login-input btn btn-primary my-3 login-button">
                Login
              </button>
              {/*<div className="signup-cont mt-5">
              New here? Please
              <Link onClick={handleShow} className="btn signup-button">
                Sign up
              </Link>
            </div>*/}
            </div>
          </form>{" "}
          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

SignUpLoginModal.propTypes = {
  show: PropTypes.bool,
};

export default SignUpLoginModal;
