import { pathOr } from 'ramda';
import { signUpService } from "../services";
import { signInConstants } from "../constants/userauthconstants";
import { showModalComAction } from "../actions/showmodal.action";
import { showErrorAlertAction } from './erroralert.action';
import { getuserinformationAction } from './getuserinformation.action';
import { updateProfileInfoAction } from './updateProfileInfo.action';
import { updateUserInfoAction } from './updateuser.action';

function handleError(err) {
  let error = err;
  error = pathOr('Something went Wrong!', ['message'])(error);
  return `${error ? error : err}`;
}


export const signupActions = {
  signup,
  resetSignUpState,
};

function signup({
  username,
  password,
  firstName,
  lastName,
  phoneNumber,
  token,
  accessToken,
  isSocialLogin,
  cb
}) {
  return (dispatch) => {
    let payload = {
      firstname: firstName,
      lastname: lastName,
      phoneNumber
    }
    dispatch(request({ username }));
    signUpService.signUp({
      username,
      password,
      accessToken,
      isSocialLogin,
      token
    }).then(
      (user) => {
        dispatch(success({ username, ...user }));
        dispatch(showModalComAction.ShowModal('signupsucess'));
        dispatch(getuserinformationAction.getuserinformation());
        dispatch(updateUserInfoAction.updateUserInfo({ phoneNumber }));
        dispatch(updateProfileInfoAction.updateProfileInfo(payload));
        cb(user);
      },
      (error) => {
        dispatch(failure(handleError(error)));
        dispatch(showErrorAlertAction.ShowErrorAlert(handleError(error, "Something went wrong. Please try later")));
        dispatch(showModalComAction.CloseModal('signin'));
      }
    );
  };
}
function request(user) {
  return { type: signInConstants.SIGNIN_REQUEST, user };
}
function success(user) {
  return { type: signInConstants.SIGNIN_SUCCESS, user };
}
function failure(error) {
  return { type: signInConstants.SIGNIN_FAILURE, error };
}

// Reset Sigin
function resetSignUpState() {
  return { type: signInConstants.RESET_SIGIN };
}
