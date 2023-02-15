import { types } from "../constants/activatedevice.constants";

const initialState = {};

function activatedeviceRed(state = initialState, action) {
  switch (action.type) {
    case types.ACTIVATE_DEVICE_REQUESTED:
      return { ...state, loading: true, response: action.response };
    case types.ACTIVATE_DEVICE_FAILURE:
      return { ...state, loading: false, response: action.response };
    case types.ACTIVATE_DEVICE_SUCCESS:
      return { ...state, loading: false, response: action.error };
    default:
      return state;
  }
}

export default activatedeviceRed;
