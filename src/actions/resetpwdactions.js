import { types } from "../constants/resetpwdconstants.js";
import { pathOr } from 'ramda';
import { signinService } from "../services/index";
import { showErrorAlertAction } from './erroralert.action';

export const resetPasswordActions = {
  resetPassword,
};

function resetPassword(code, password, cb) {
  return (dispatch) => {
    dispatch(request({}));
    signinService.resetPassword(code, password).then(
      (user) => {
        dispatch(success(user));
        cb();
      },
      (error) => {
        let errorMessage = pathOr('', ['message'])(error);
        dispatch(failure(errorMessage ? `${error}` : ""));
        dispatch(showErrorAlertAction.ShowErrorAlert(
          `Reset password failure - ${errorMessage ? `${errorMessage}` : error}`,
          "Something went wrong. Please try later"))
      }
    );
  };
}
function request(user) {
  return { type: types.REQUEST_PASSWORD_RESET, user };
}
function success(user) {
  return { type: types.PASSWORD_RESET_SUCCESS, user };
}
function failure(error) {
  return { type: types.PASSWORD_RESET_FAILURE, error };
}
