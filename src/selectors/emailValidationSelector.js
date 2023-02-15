import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export function EmailValidationSelector() {
  let emailValidationResult = useSelector(state => pathOr(null, ['Emailvalidation', 'emailaddress'])(state));
  let socialLoginError = useSelector(state => pathOr(null, ['Emailvalidation', 'socialLoginError'])(state));
  let isFacebookUser = pathOr(null, ['isFacebookUser'])(emailValidationResult);
  let isGoogleUser = pathOr(null, ['isGoogleUser'])(emailValidationResult);
  let isAppleUser = pathOr(null, ['isAppleUser'])(emailValidationResult);
  let isSocialLogin = false;
  if (isFacebookUser || isGoogleUser || isAppleUser) {
    isSocialLogin = true;
  }
  return {
    isSocialLogin,
    isGoogleUser,
    isFacebookUser,
    isVerified: pathOr(null, ['isVerified'])(emailValidationResult),
    isExists: pathOr(null, ['isExists'])(emailValidationResult),
    socialLoginError
  }
}

export default EmailValidationSelector;
