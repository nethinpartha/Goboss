import React from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';

export function socialLoginSelector() {
  let userInfo = useSelector(state => pathOr(null, ['userAuth', 'signInstatus'])(state));
  let isFacebookUser = useSelector(state => pathOr(null, ['userAuth', 'signInstatus', 'isFacebookUser'])(state));
  let isGoogleUser = useSelector(state => pathOr(null, ['userAuth', 'signInstatus', 'isGoogleUser'])(state));
  let isSocialLogin = false;
  if (isFacebookUser || isGoogleUser) {
    isSocialLogin = true;
  }
  return {
    isSocialLogin
  }
}

export default socialLoginSelector;
