import { types } from "../constants/getSubscriptionPlans";

const initialState = {};

export default function SubscriptionListReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SUBSCRIPTION_REQUESTED:
      return { ...state, results: null, loading: true };
    case types.GET_SUBSCRIPTION_SUCCESS:
      return { ...state, result: action.response, loading: false };
    case types.GET_SUBSCRIPTION_FAILURE:
      return { ...state, results: null, loading: false };
    default:
      return state;
  }
}
