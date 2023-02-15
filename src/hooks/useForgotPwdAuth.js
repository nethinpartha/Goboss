import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { pathOr } from 'ramda';
import { __parseThemeSelector } from '../selectors/themestyleselector';
import { signinActions } from '../actions/signinactions';


export const useForgotPwdAuth = () => {
  const [inputs, setInputs] = useState({
    email: ""
  });
  const [resetemailsent, setresetemailsent] = useState(false);
  const dispatch = useDispatch();
  const [emailAddressEntered, setEmailEnteredState] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const emailAddress = useSelector((state) =>
    pathOr("", ["Emailvalidation", "emailaddress", "username"])(state)
  );
  const forgotPasswordEmailStatus = useSelector(state => pathOr('', ['resetpassword', 'forgotpasswordreq', 'records', 'responseCode'])(state));
  const forgotPasswordEmailStatusMessage = useSelector(state => pathOr('', ['resetpassword', 'forgotpasswordreq', 'records', 'message'])(state));
  const loading = useSelector(state => pathOr(false, ['resetpassword', 'loading'])(state));
  const { colors } = __parseThemeSelector();
  const primaryBtnColor = pathOr('', ['primaryBtnColor'])(colors)
  const onSubmit = values => {
    setInputs({ ...inputs, email: values.email });

    if (!inputs.email) {
      setEmailEnteredState(true);
      return;
    }

    dispatch(signinActions.resetPwdEmailSend(inputs.email));
    setEmailEnteredState(false);
  };

  // useEffect for emailAddress
  useEffect(() => {
    if (!emailAddress) return;
    setInputs({ ...inputs, email: emailAddress });
    if (forgotPasswordEmailStatus === 200) {
      return setresetemailsent(true);
    }
  }, [emailAddress, forgotPasswordEmailStatus]);

  useEffect(() => {
    // dispatch({ type: "RESET_SIGIN" });
    return () => {
      dispatch({ type: 'RESET_PASSWORD_EMAIL_INITIALIZE' })
    }
  }, []);
  return {
    inputs,
    setInputs,
    loading,
    emailAddressEntered,
    emailAddress,
    forgotPasswordEmailStatus,
    resetemailsent,
    primaryBtnColor,
    forgotPasswordEmailStatusMessage,
    onSubmit,
    register,
    errors,
    handleSubmit
  }
}