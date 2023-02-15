import { types } from "../constants/verifyemail.constants";
import { verifyEmailService } from "../services/verifyemail.service";
import { showErrorAlertAction } from './erroralert.action';

export const verifyEmailAction = {
  verifyemail,
};

function verifyemail(code) {
  return (dispatch) => {
    dispatch(request({}));
    verifyEmailService.VerifyEmail(code).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(showErrorAlertAction.ShowErrorAlert(`Verify email password failure - ${error}`, "Something went wrong. Please try later"))
      }
    );
  };
}
function request(user) {
  return { type: types.REQUEST_EMAIL_VERIFICATION, user };
}
function success(user) {
  return { type: types.EMAIL_VERIFICATION_SUCCESS, user };
}
function failure(error) {
  return { type: types.EMAIL_VERIFICATION_FAILURE, error };
}
