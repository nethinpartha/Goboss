import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pathOr } from "ramda";
import { signinActions } from "../actions/signinactions";
import jwt_decode from "jwt-decode";

export const useAppleAuth = () => {

  const [userDataApple, setuserDataApple] = useState({
    isLogedin: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
    accessToken: ''
  });

  const [appleLoginSelect, setappleLoginSelect] = useState(false);

  const dispatch = useDispatch();

  const componentClicked = () => {
    // dispatch request action
    setappleLoginSelect(true);
    console.log('component click', appleLoginSelect);
  };

  useEffect(() => {
    let { accessToken, email } = userDataApple;
    if (!email && accessToken) {
      var decodedToken = jwt_decode(accessToken);
      email = pathOr('', ['email'])(decodedToken);
    }
    if (accessToken && appleLoginSelect) {
      return dispatch(signinActions.preSignInAuth({
        username: email,
        accessToken,
        isSocialLogin: {
          isFacebookUser: false,
          isGoogleUser: false,
          isAppleUser: true
        }
      }))
    }
  }, [userDataApple.accessToken]);


  const responseAppleLogin = response => {
    const authorization = pathOr('', ['authorization'], response);
    const user = pathOr('', ['user'])(response);
    setuserDataApple({
      code: pathOr('', ['code'])(authorization),
      name: pathOr('', ['name'])(authorization),
      email: pathOr('', ['email'])(user),
      accessToken: pathOr('', ['id_token'])(authorization),
      state: pathOr('', ['status'])(authorization)
    });
  };

  return { responseAppleLogin, componentClicked, dispatch }
}