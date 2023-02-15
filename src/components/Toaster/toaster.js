import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { pathOr } from 'ramda';
import { showErrorAlertAction } from '../../actions/erroralert.action';
import './toasterstyle.scss';


export const Toaster = () => {
  const dispatch = useDispatch();
  const showAlert = useSelector(state => pathOr(false, ['ErrorAlert', 'show'])(state));
  const showAlertMessage = useSelector(state => pathOr('', ['ErrorAlert', 'message'])(state));
  const showAlertTitle = useSelector(state => pathOr('', ['ErrorAlert', 'title'])(state));
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  function handleAlertClose() {
    setShow(false);
    dispatch(showErrorAlertAction.CloseErrorAlert())
  }

  useEffect(() => {
    setShow(showAlert);
    setMessage(showAlertMessage);
    setTitle(showAlertTitle);
  }, [showAlert, showAlertMessage]);

  useEffect(() => {
    if (show === true) {
      let timer1;
      timer1 = setTimeout(() => {
        setShow(false);
        dispatch(showErrorAlertAction.CloseErrorAlert());
      }, 6000);
    }

    // return () => {
    //   console.log('called timer1 clear')
    //   clearTimeout(timer1);
    // }
  }, [showAlert, show]);

  return show ? (
    <div className={"toaster-wrapper"}>
      <Alert
        onClose={handleAlertClose}
        dismissible
        className={"toaster-alert"}>
        <p className={"content-color contet-title"}>{title}</p>
        < p className={"content-color content-message"}>
          {message}
        </p>
      </Alert>
    </div >
  ) : null;
}