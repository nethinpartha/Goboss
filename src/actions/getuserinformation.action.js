import { types } from "../constants/getuserinformation.constants";
import { userinformationdetailsService } from "../services/getuserinformation.service";

const getuserinformation = () => {
  return (dispatch) => {
    dispatch(request());
    userinformationdetailsService.userinformationdetails().then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        // dispatch(showErrorAlertAction.ShowErrorAlert(error.toString()))
      }
    );
  };
};

function request() {
  return { type: types.GET_USER_INFORMATION_REQUESTED };
}

function success(response) {
  return { type: types.GET_USER_INFORMATION_SUCCESS, response };
}

function failure(error) {
  return { type: types.GET_USER_INFORMATION_FAILURE, error };
}

export const getuserinformationAction = {
  getuserinformation,
};
