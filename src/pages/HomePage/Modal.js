import React, { useState } from "react";
import loginCompImage from "../../assets/logo.png";
import companyNameImage from "../../assets/companyName.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ModalComponent = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => setShow(true);
  return (
    <React.Fragment>
      {show && (
        <div>
          <Button variant="warning" onClick={handleModal}>
            Login
          </Button>
        </div>
      )}
      <Modal className="modal-style" centered show={show}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="logo-div">
            <img src={loginCompImage} alt="login" />{" "}
          </div>
          <div className="company-name">
            <img src={companyNameImage} alt="company-name" />{" "}
          </div>
          <div className="heading">Login or Create account</div>
          <form name="form">
            <div className="form-group">
              <div className="form-email">EMAIL</div>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value
                className="login-input"
              />
            </div>
          </form>{" "}
          <div className="btn-group">
            <button className="login-button">
              <div className="login-button-text">CONTINUE</div>
            </button>
            {/*<div className="signup-cont mt-5">
              New here? Please
              <Link onClick={handleShow} className="btn signup-button">
                Sign up
              </Link>
            </div>*/}
          </div>
          <div className="social-login">
            <h2>
              <span>Social login</span>
            </h2>
          </div>
          <div className="social-img">
            <img
              className="fb-icon"
              src={""}
              alt="facebook icon"
              width="75px"
            />{" "}
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
