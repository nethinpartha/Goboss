
import { types } from '../constants/clearindivactivedevice.constants';
import { clearIndividualDeviceService } from '../services/clearindividualdevice.service';
import { getactivateDeviceAction } from './getactivedevices.action';
import { showErrorAlertAction } from './erroralert.action';
import { signout } from './signinactions';
// add to watchlist the content 
const clearIndividualDevices = ({ deviceId, cb }) => {
  return (dispatch) => {
    dispatch(request({ type: types.CLEAR_DEVICE_REQUESTED }));
    clearIndividualDeviceService.clearindividevice({ deviceId }).then((response) => {
      dispatch(success({ type: types.CLEAR_DEVICE_SUCCESS, response }));
      dispatch(getactivateDeviceAction.getactivatedevice());
      // signout(cb);
    },
      (error) => {
        dispatch(failure({ type: types.CLEAR_DEVICE_FAILURE, error }));
        dispatch(showErrorAlertAction.ShowErrorAlert(`${error}`));
      }
    );
  };
};



function request({ type }) {
  return { type };
}

function success({ type, response }) {
  return { type, response };
}

function failure({ type, error }) {
  return { type, error };
}

export const clearIndiviDevicesAction = {
  clearIndividualDevices
};
