import { type } from "../constants/changepwdconstants";

const initialState = {};

function ChangePasswordReducer(state = initialState, action) {
  switch (action.type) {
    case type.UPDATE_PASSWORD_ADDRESS_REQUEST:
      return {
        ...state,
        showSuccess: false,
        loading: true,
        response: action.response
      };
    case type.UPDATE_PASSWORD_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        showSuccess: false,
        response: action.error
      };
    case type.UPDATE_PASSWORD_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
        showSuccess: true
      };
    case type.UPDATE_PASSWORD_ADDRESS_RESET:
      return {
        ...state,
        loading: false,
        response: null,
        showSuccess: false
      };
    default:
      return state;
  }
}

export default ChangePasswordReducer;
