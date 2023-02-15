import { types } from "../constants/getactivedevices.constants";

const initialState = {};

function getallactivatedeviceRed(state = initialState, action) {
  switch (action.type) {
    case types.GET_ACTIVE_DEVICES_REQUESTED:
      return { ...state, loading: true, response: action.response };
    case types.GET_ACTIVE_DEVICES_SUCCESS:
      return { ...state, loading: false, response: action.response };
    case types.GET_ACTIVE_DEVICES_FAILURE:
      return { ...state, loading: false, response: action.error };
    default:
      return state;
  }
}

export default getallactivatedeviceRed;
