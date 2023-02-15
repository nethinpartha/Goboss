import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pathOr } from 'ramda';
import { signinActions } from "../actions/signinactions";


export const useGoogleAuth = () => {

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: "",
    url: '',
    accessToken: "",
    googleId: "",
    tokenId: ""
  });

  const dispatch = useDispatch();

  useEffect(() => {
    let { tokenId, email } = userDetails;
    if (tokenId && email) {
      return dispatch(signinActions.preSignInAuth({
        username: email,
        accessToken: tokenId,
        isSocialLogin: {
          isFacebookUser: false,
          isGoogleUser: true,
          isAppleUser: false
        }
      }))
    }
    return () => {
      // clear all subscriptions
    }
  }, [userDetails.tokenId]);

  const responseGoogle = (response) => {
    setUserDetails({
      name: pathOr("", ["profileObj", "name"])(response),
      email: pathOr("", ["profileObj", "email"])(response),
      url: pathOr("", ["profileObj", "imageUrl"])(response),
      accessToken: pathOr("", ["accessToken"])(response),
      googleId: pathOr("", ["profileObj", "googleId"])(response),
      tokenId: pathOr("", ["tokenId"])(response)
    })
  };

  return { responseGoogle, userDetails, setUserDetails }
}