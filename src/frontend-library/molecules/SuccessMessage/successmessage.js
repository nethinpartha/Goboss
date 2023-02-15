import React from "react";
import { showModalComAction } from "../../../actions/showmodal.action";
import checkLogo from "../../../assets/checkLogo.png";
import { Container, Image, Row, Button } from "react-bootstrap";
import parse from "html-react-parser";
import "./style.scss";

export const SuccessMessage = ({
  dispatch,
  colors,
  message,
  subcontent,
  showAcptBtn,
  showCheckIcon,
}) => {
  const handleAcceptance = () => {
    dispatch(showModalComAction.CloseModal("signin"));
  };
  return (
    <Container className="contact-content">
      {showCheckIcon && (
        <Row className="justify-content-center">
          <Image src={checkLogo} alt="check icon" />
        </Row>
      )}
      {message && (
        <Row className="success-msg-content success-msg-first-txt">
          {parse(message)}
        </Row>
      )}
      {subcontent && (
        <Row className="success-msg-content">{parse(subcontent)}</Row>
      )}
      {showAcptBtn && (
        <Row className="success-btn-wrapper">
          <Button
            onClick={handleAcceptance}
            className="success-msg-acpt-btn"
            style={{
              background: `${colors.primaryBtnColor}`,
              border: "none",
              padding: "0.25rem 2rem",
              textTransform: "uppercase",
            }}
          >
            Ok
          </Button>
        </Row>
      )}
    </Container>
  );
};
