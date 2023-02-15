import { updatePasswordService } from "../services/updatepasswordservice";
import { pathOr } from 'ramda';
import { type } from "../constants/changepwdconstants";
import { showErrorAlertAction } from './erroralert.action';
import { clearAllDevicesAction } from './clearDevices.action';
import { history } from '../helpers/history';

const updatepwd = ({ emailid, oldPassword, newPassword }) => {
  return (dispatch) => {
    dispatch(request(emailid));
    updatePasswordService.updatepassword({ emailid, oldPassword, newPassword }).then(
      (response) => {
        dispatch(success(response));
        dispatch(clearAllDevicesAction.clearAllDevices(() => {
          history.push('/');
          return window.location.reload();
        }));
      },
      (error) => {
        let errorMessage = pathOr('', ['message'])(error);
        dispatch(showErrorAlertAction.ShowErrorAlert(errorMessage ? `Email validation failure - ${errorMessage}` : `${error}`, "Something went wrong"));
        dispatch(failure(error.toString()));
      }
    );
  };
};

function request() {
  return { type: type.UPDATE_PASSWORD_ADDRESS_REQUEST };
}

function success(response) {
  return { type: type.UPDATE_PASSWORD_ADDRESS_SUCCESS, response };
}

function failure(error) {
  return { type: type.UPDATE_PASSWORD_ADDRESS_FAILURE, error };
}

export const updatepwdAction = {
  updatepwd,
};
