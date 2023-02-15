import { type } from "../constants/changeemailconstants";

const initialState = {};

function ChangeEmailReducer(state = initialState, action) {
  switch (action.type) {
    case type.UPDATE_EMAIL_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        response: action.newemail,
      };
    case type.UPDATE_EMAIL_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
      };
    case type.UPDATE_EMAIL_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        response: action.error,
        showSuccess: false
      };
    default:
      return state;
  }
}

export default ChangeEmailReducer;
