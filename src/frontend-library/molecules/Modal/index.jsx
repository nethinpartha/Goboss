import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { ModalStyle } from './modalstyle';
import { useModal } from '../../../hooks/useModal';
import './modalstyle.scss';

export function ModalComponent(
  // { handleClose, showModal }
) {
  const { showModal, handleClose, isPaymentPage, verticallyCentered, HeaderMessage, renderComponent } = useModal();
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        className={'header authentication-modal'}
        dialogClassName={isPaymentPage ? "custom-modal" : ""}
        aria-labelledby={verticallyCentered ? "contained-modal-title-vcenter" : ""}
        centered={verticallyCentered ? true : false}
        backdrop="static"
        // keyboard={false}
      // bsClass={isPaymentPage ? "my-modal" : ""}
      >
        <ModalStyle />
        <Modal.Header closeButton>
          <h1 className="stepTitle gradient-text" style={{ color: '#ffffff' }}>
            {HeaderMessage()}
          </h1>
        </Modal.Header>
        <Modal.Body >{renderComponent()}</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}