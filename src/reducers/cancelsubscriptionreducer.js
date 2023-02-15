import { type } from "../constants/cancelsubscriptionconstants";

const initialState = {};

function CancelMembershipReducer(state = initialState, action) {
  switch (action.type) {
    case type.CANCEL_SUBSCRIPTION_REQUEST_REQUEST:
      return {
        ...state, loading: true,
        response: action.response,
        showSuccess: false
      };
    case type.CANCEL_SUBSCRIPTION_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        response: action.response,
        showSuccess: false
      };
    case type.CANCEL_SUBSCRIPTION_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response,
        showSuccess: true
      };
    default:
      return state;
  }
}

export default CancelMembershipReducer;
