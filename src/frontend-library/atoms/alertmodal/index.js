import React, { useEffect, useState } from 'react';
import { Modal, Button, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { showAlertAction } from '../../../actions/showalert.action';
import { pathOr } from 'ramda';
import { AlertStyle } from './alertstyle';
import "./alertmodalstyle.scss";

export const AlertModal = ({ acceptBtnText = "Ok", declineBtnText = "Cancel", handleAcceptance }) => {
  const dispatch = useDispatch();

  const [showAlert, setAlertShow] = useState(false);
  const [alertheading, setAlertHeading] = useState("");
  const [alertbody, setAlertBody] = useState("");

  const showAlertComp = useSelector(state => pathOr(false, ['ShowAlertComp', 'show'])(state));
  const heading = useSelector(state => pathOr(false, ['ShowAlertComp', 'title'])(state));
  const body = useSelector(state => pathOr(false, ['ShowAlertComp', 'body'])(state));


  function handleClose() {
    setAlertShow(false);
    dispatch(showAlertAction.CloseAlertModal());
  }
  useEffect(() => {
    setAlertShow(showAlertComp);
    setAlertHeading(heading);
    setAlertBody(body);
  }, [showAlertComp, heading, body]);

  return (
    <>
      <AlertStyle />
      <Modal
        show={showAlert}
        onHide={handleClose}
        className={'header confirmation-alert'}
        size="sm"
        centered
      >
        <Modal.Header className={"confirmation-alert-header"}>
          <Modal.Title>{alertheading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row
              className="confirmation-alert-btn-body"
            >
              {alertbody}
            </Row>
            <Row>
              <Button
                onClick={() => {
                  handleAcceptance();
                  handleClose();
                }}
                className="confirmation-alert-accept-tn confirmation-alert-btn hover-btn-animation"
              >
                {acceptBtnText}
              </Button>
              <Button
                className="confirmation-alert-btn decline-acceptance hover-btn-animation"
                onClick={handleClose}>
                {declineBtnText}
              </Button>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}