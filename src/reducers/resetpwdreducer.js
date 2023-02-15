import { types } from "../constants/resetpwdconstants";

const initialState = {};

export default function PwdResetState(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_PASSWORD_RESET:
      return { ...state, loading: true, error: null };
    case types.PASSWORD_RESET_SUCCESS:
      return { ...state, status: action.user, loading: false, error: null };
    case types.PASSWORD_RESET_FAILURE:
      return {
        ...state,
        continueWaching: action.payload,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
