import { updatePhoneNoService } from "../services/updatephonenoservice";
import { type } from "../constants/changephonenoconstants";

const updatephoneno = (emailid, password) => {
  return (dispatch) => {
    dispatch(request(emailid));
    updatePhoneNoService.updatephonenumber(emailid, password).then(
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
  return { type: type.UPDATE_PHONE_NUMBER_REQUEST, newemailid };
}

function success(response) {
  return { type: type.UPDATE_PHONE_NUMBER_SUCCESS, response };
}

function failure(error) {
  return { type: type.UPDATE_PHONE_NUMBER_FAILURE, error };
}

export const updatephonenoAction = {
  updatephoneno,
};
