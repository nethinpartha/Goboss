
import { types } from '../constants/getactivedevices.constants';
import { getactivatedeviceservice } from '../services/getactivedevice.service';

const getactivatedevice = () => {
  return (dispatch) => {

    dispatch(request({ type: types.GET_ACTIVE_DEVICES_REQUESTED }));
    getactivatedeviceservice.getactivateDevice().then((response) => {
      dispatch(success({ type: types.GET_ACTIVE_DEVICES_SUCCESS, response }));
    },
      (error) => {
        dispatch(failure({ type: types.GET_ACTIVE_DEVICES_FAILURE, error }))
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

export const getactivateDeviceAction = {
  getactivatedevice
};
