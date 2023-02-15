import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pathOr } from "ramda";
import { signinActions } from "../actions/signinactions";

export const useFacebookAuth = () => {
  const [userData, setUserData] = useState({
    isLogedin: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    accessToken: "",
  });
  const [fbLoginSelect, setFbLoginSelect] = useState(false);
  const dispatch = useDispatch();

  const componentClicked = () => {
    // dispatch request action
    setFbLoginSelect(true);
  };

  useEffect(() => {
    let { accessToken, email } = userData;
    if (accessToken && fbLoginSelect && email) {
      return dispatch(
        signinActions.preSignInAuth({
          username: email,
          accessToken,
          isSocialLogin: {
            isFacebookUser: true,
            isGoogleUser: false,
            isAppleUser: false,
          },
        })
      );
    }
  }, [userData.accessToken]);

  const responseFacebook = (response) => {
    let responseStatus = pathOr("", ["status"], response);
    let authenticatedStatus = responseStatus === "connected";
    setUserData({
      isLoggedIn: authenticatedStatus ? true : false,
      userID: pathOr("", ["userID"])(response),
      name: pathOr("", ["name"])(response),
      email: pathOr("", ["email"])(response),
      picture: pathOr("", ["picture", "data", "url"])(response),
      accessToken: pathOr("", ["accessToken"])(response),
      status: pathOr("", ["status"])(response),
    });
  };

  return { responseFacebook, setUserData, userData, componentClicked };
};
