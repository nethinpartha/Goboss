import { updatePasswordService } from "../services/updatepasswordservice";
import { type } from "../constants/changeemailconstants";

const updateemail = (emailid, password) => {
  return (dispatch) => {
    dispatch(request(emailid));
    updatePasswordService.updatepassword(emailid, password).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
};

function request(newemailid) {
  return { type: type.UPDATE_EMAIL_ADDRESS_REQUEST, newemailid };
}

function success(response) {
  return { type: type.UPDATE_EMAIL_ADDRESS_SUCCESS, response };
}

function failure(error) {
  return { type: type.UPDATE_EMAIL_ADDRESS_FAILURE, error };
}

export const updateEmailAction = {
  updateemail,
};
