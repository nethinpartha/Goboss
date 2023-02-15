import { types } from "../constants/getcancellationreason.contants";

const initialState = {};

function getcancellationreason(state = initialState, action) {
  switch (action.type) {
    case types.GET_CANCELLATION_REASONS_REQUESTED:
      return { ...state, loading: true, response: action.response };
    case types.GET_CANCELLATION_REASONS_SUCCESS:
      return { ...state, loading: false, response: action.response };
    case types.GET_CANCELLATION_REASONS_FAILURE:
      return { ...state, loading: false, response: action.error };
    default:
      return state;
  }
}

export default getcancellationreason;
