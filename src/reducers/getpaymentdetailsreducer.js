import { types } from "../constants/getpaymentmethod.constants";

const initialState = {};

function paymentMethods(state = initialState, action) {
  switch (action.type) {
    case types.GET_PAYMENT_METHOD_REQUESTED:
      return { ...state, loading: true, response: action.response };
    case types.GET_PAYMENT_METHOD_FAILURE:
      return { ...state, loading: false, response: action.error };
    case types.GET_PAYMENT_METHOD_SUCCESS:
      return { ...state, loading: false, response: action.response };
    default:
      return state;
  }
}

export default paymentMethods;
