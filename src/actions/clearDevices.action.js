
import { types } from '../constants/cleardevices.constants';
import { clearDevicesService } from '../services/cleardevices.service';
import { getactivateDeviceAction } from './getactivedevices.action';
import { showErrorAlertAction } from './erroralert.action';
import { signout } from './signinactions';
// add to watchlist the content 
const clearAllDevices = (cb) => {
  return (dispatch) => {
    dispatch(request({ type: types.CLEAR_ALL_DEVICES_REQUESTED }));
    clearDevicesService.cleardevice().then((response) => {
      dispatch(success({ type: types.CLEAR_ALL_DEVICES_SUCCESS, response }));
      dispatch(getactivateDeviceAction.getactivatedevice());
      signout(cb);
    },
      (error) => {
        dispatch(failure({ type: types.CLEAR_ALL_DEVICES_FAILURE, error }));
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

export const clearAllDevicesAction = {
  clearAllDevices
};
