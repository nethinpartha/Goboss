
import { types } from '../constants/activatedevice.constants';
import { pathOr } from 'ramda';
import { activatedeviceservice } from '../services/activatedevice.service';
import { showErrorAlertAction } from './erroralert.action';
import {getactivateDeviceAction} from './getactivedevices.action';

// add to watchlist the content 
const activatedevice = (otp,refreshActiveDevices) => {
  return (dispatch) => {

    dispatch(request({ type: types.ACTIVATE_DEVICE_REQUESTED }));
    activatedeviceservice.activateDevice({ otp }).then((response) => {
      dispatch(showErrorAlertAction.ShowErrorAlert("", "Activation successfull"));
      if(refreshActiveDevices) {
        dispatch(getactivateDeviceAction.getactivatedevice())
      }
      dispatch(success({ type: types.ACTIVATE_DEVICE_SUCCESS, response }));
    },
      (error) => {
        let errorMessage = pathOr('', ['message'])(error);
        dispatch(showErrorAlertAction.ShowErrorAlert(errorMessage ? `Activate a code error - ${errorMessage}` :
          `${error}`, "Something went wrong. Please try later"));
        dispatch(failure({ type: types.ACTIVATE_DEVICE_FAILURE, error }))
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

export const activateDeviceAction = {
  activatedevice
};
