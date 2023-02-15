import { signinService } from "../services";
import { pathOr } from "ramda";
import { store } from "../helpers/store";
import {
  signInConstants,
  preAuthValidation,
  resetPwdEmail,
  resetAccessToken,
} from "../constants/userauthconstants";
import { showModalComAction } from "./showmodal.action";
import { showErrorAlertAction } from "./erroralert.action";
import { signupActions } from "./signupactions";
import { socialSignInService } from "../services/socialsigninservice";
import { getuserinformationAction } from "./getuserinformation.action";

let AppleUserError =
  "You logged in with Apple Sign-In before.Please Sign-In using Apple";
let FacebookUserError =
  "You logged in with Facebook before.Please Sign-In using Facebook";
let GoogleUserError =
  "You logged in with Google before.Please Sign-In using Google";
let emailAlreadyRegistered =
  "You already have an account with this email address, please signin using";

export const signinActions = {
  signin,
  signout,
  preSignInAuth,
  resetSignInParams,
  resetPwdEmailSend,
  rotateAccessTokenExpiration,
};

function signin({ username, password, accessToken, isSocialLogin, cb }) {
  return (dispatch) => {
    var { isFacebookUser, isGoogleUser, isAppleUser } = isSocialLogin;
    dispatch(request({ username }));
    signinService
      .signin({ username, password, accessToken, isSocialLogin })
      .then(
        (user) => {
          dispatch(success(user));
          dispatch(getuserinformationAction.getuserinformation());
          cb(user);
        },
        (error) => {
          let errorMessage = pathOr("", ["message"])(error);
          dispatch(failure(errorMessage ? error : ""));
          dispatch(
            showErrorAlertAction.ShowErrorAlert(
              errorMessage ? `Sign in failure - ${errorMessage}` : error,
              "Something went wrong. Please try later"
            )
          );
          if (isFacebookUser) {
            socialSignInService.fbSessionSignout();
          } else if (isGoogleUser) {
            socialSignInService.googleLogout();
          }
        }
      );
  };

  function request(user) {
    return { type: signInConstants.SIGNIN_REQUEST, user };
  }
  function success(user) {
    return { type: signInConstants.SIGNIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: signInConstants.SIGNIN_FAILURE, error };
  }
}

export function signout(cb) {
  signinService.signout(cb);
  socialSignInService.fbSessionSignout();
  socialSignInService.googleLogout();
  store.dispatch(showModalComAction.CloseModal("signin"));
  store.dispatch({ type: "EMAIL_ADDRESS_RESET" });
  store.dispatch({ type: "RESET_USER_INFORMATION" });
  return { type: signInConstants.SIGNOUT };
}

function preSignInAuth({ username, accessToken, isSocialLogin }) {
  return (dispatch) => {
    var { isFacebookUser, isGoogleUser, isAppleUser } = isSocialLogin;
    if (!isFacebookUser && !isGoogleUser && !isAppleUser) {
      dispatch(presigninrequest({ username }));
    }
    signinService
      .preSignInAuth({
        username,
        accessToken,
        isSocialLogin,
      })
      .then(
        (user) => {
          reduceResponse({
            isFacebookUser,
            isGoogleUser,
            isAppleUser,
            username,
            user,
            dispatch,
            accessToken,
            isSocialLogin,
          });
        },
        (error) => {
          let errorMessage = pathOr("", ["message"])(error);
          dispatch(presigninfailure(errorMessage ? error : ""));
          dispatch(
            showErrorAlertAction.ShowErrorAlert(
              errorMessage
                ? `Email validation failure - ${errorMessage}`
                : error,
              "Something went wrong. Please try later"
            )
          );
          if (isFacebookUser) {
            socialSignInService.fbSessionSignout();
          } else if (isGoogleUser) {
            socialSignInService.googleLogout();
          }
        }
      );
  };
}

function presigninrequest(user) {
  return { type: preAuthValidation.EMAIL_ADDRESS_EXIST_REQUEST, user };
}
function presigninsuccess(user) {
  return { type: preAuthValidation.EMAIL_ADDRESS_EXIST_SUCCESS, user };
}
function presigninfailure(error) {
  return { type: preAuthValidation.EMAIL_ADDRESS_EXIST_FAILURE, error };
}

// Reset Sigin
function resetSignInParams() {
  return { type: signInConstants.RESET_SIGIN };
}

// Reset password email
function resetPwdEmailSend(username) {
  return (dispatch) => {
    dispatch(rstPwdEmailrequest({ username }));
    signinService.rstPwdEmail(username).then(
      (user) => {
        dispatch(
          showErrorAlertAction.ShowErrorAlert(
            "Reset Password link sent successfully to email id."
          )
        );
        dispatch(rstPwdEmailsuccess({ username, ...user }));
      },
      (error) => {
        let errorMessage = pathOr("", ["message"])(error);
        dispatch(
          showErrorAlertAction.ShowErrorAlert(
            errorMessage
              ? `Email validation failure - ${errorMessage}`
              : `${JSON.stringify(error)}`,
            "Something went wrong. Please try later"
          )
        );
        dispatch(rstPwdEmailfailure(error));
      }
    );
  };
}

function rstPwdEmailrequest(user) {
  return { type: resetPwdEmail.RESET_PASSWORD_EMAIL_REQUEST, user };
}
function rstPwdEmailsuccess(user) {
  return { type: resetPwdEmail.RESET_PASSWORD_EMAIL_SUCCESS, user };
}
function rstPwdEmailfailure(error) {
  return { type: resetPwdEmail.RESET_PASSWORD_EMAIL_FAILURE, error };
}

// Rotate Access token key
function rotateAccessTokenExpiration(refreshToken) {
  return (dispatch) => {
    dispatch(resetAccesskeyrequest());
    signinService.rotateAccessKey(refreshToken).then(
      (response) => {
        dispatch(resetAccesskeysuccess(response));
      },
      (error) => {
        dispatch(resetAccesskeyfailure(error));
      }
    );
  };
}

function resetAccesskeyrequest(response) {
  return { type: resetAccessToken.RESET_ACCESS_TOKEN_REQUEST, response };
}
function resetAccesskeysuccess(response) {
  return { type: resetAccessToken.RESET_ACCESS_TOKEN_SUCCESS, response };
}
function resetAccesskeyfailure(error) {
  return { type: resetAccessToken.RESET_ACCESS_TOKEN_FAILURE, error };
}

// Reduce the response and scope it to a seperate function

function reduceResponse({
  isFacebookUser,
  isGoogleUser,
  isAppleUser,
  username,
  user,
  dispatch,
  accessToken,
  isSocialLogin,
}) {
  if (!isFacebookUser && !isGoogleUser && !isAppleUser) {
    dispatch(presigninsuccess({ username, ...user }));
  }
  if (
    user &&
    user.isVerified &&
    !user.isFacebookUser &&
    !user.isGoogleUser &&
    !user.isAppleUser
  ) {
    if (isFacebookUser) {
      socialSignInService.fbSessionSignout();
    } else if (isGoogleUser) {
      socialSignInService.googleLogout();
    } else if (isAppleUser) {
      // apple logout
    }
  }
  if (
    user &&
    user.isExists &&
    !user.isFacebookUser &&
    !user.isGoogleUser &&
    !user.isAppleUser
  ) {
    if (isFacebookUser) {
      dispatch(
        showErrorAlertAction.ShowErrorAlert(
          `${emailAlreadyRegistered} ${username}`
        )
      );
      dispatch({ type: "SOCIAL_LOGIN_FAILURE" });
      socialSignInService.fbSessionSignout();
      return;
    } else if (isGoogleUser) {
      dispatch(
        showErrorAlertAction.ShowErrorAlert(
          `${emailAlreadyRegistered} ${username}`
        )
      );
      dispatch({ type: "SOCIAL_LOGIN_FAILURE" });
      socialSignInService.googleLogout();
      return;
    } else if (isAppleUser) {
      dispatch(
        showErrorAlertAction.ShowErrorAlert(
          `${emailAlreadyRegistered} ${username}`
        )
      );
      dispatch({ type: "SOCIAL_LOGIN_FAILURE" });
      return;
    }
  }
  if (
    user &&
    user.isExists &&
    (user.isFacebookUser || user.isGoogleUser || user.isAppleUser)
  ) {
    if (!isFacebookUser && user.isFacebookUser) {
      dispatch(showErrorAlertAction.ShowErrorAlert(`${FacebookUserError}`));
      dispatch({ type: "RESET_SIGIN" });
      dispatch({ type: "EMAIL_ADDRESS_RESET" });
      socialSignInService.fbSessionSignout();
      return;
    } else if (!isGoogleUser && user.isGoogleUser) {
      dispatch(showErrorAlertAction.ShowErrorAlert(`${GoogleUserError}`));
      dispatch({ type: "RESET_SIGIN" });
      dispatch({ type: "EMAIL_ADDRESS_RESET" });
      socialSignInService.googleLogout();
      return;
    } else if (!isAppleUser && user.isAppleUser) {
      dispatch(showErrorAlertAction.ShowErrorAlert(`${AppleUserError}`));
      dispatch({ type: "RESET_SIGIN" });
      dispatch({ type: "EMAIL_ADDRESS_RESET" });
      return;
    }
  }

  if (
    user &&
    user.isExists &&
    user.isVerified &&
    (user.isFacebookUser || user.isGoogleUser || user.isAppleUser)
  ) {
    dispatch(
      signinActions.signin({
        username,
        password: undefined,
        accessToken,
        isSocialLogin,
        cb: (user) => {
          dispatch(showModalComAction.CloseModal("signin"));
        },
      })
    );
  } else if (
    user &&
    !user.isExists &&
    (isFacebookUser || isGoogleUser || isAppleUser)
  ) {
    dispatch(
      signupActions.signup({
        username,
        password: "",
        token: "",
        accessToken,
        isSocialLogin,
        cb: (user) => {
          // console.log(user)
        },
      })
    );
  }
}
