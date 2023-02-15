import { types } from "../constants/buysubscription.constants";

const initialState = {};

function buySubscription(state = initialState, action) {
  switch (action.type) {
    case types.BUY_SUBSCRIPTION_PLAN_REQUESTED:
      return { ...state, loading: true, response: action.response };
    case types.BUY_SUBSCRIPTION_PLAN_FAILURE:
      return { ...state, loading: false, response: action.response };
    case types.BUY_SUBSCRIPTION_PLAN_SUCCESS:
      return { ...state, loading: false, response: action.error };
    default:
      return state;
  }
}

export default buySubscription;
