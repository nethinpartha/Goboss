import { actionTypes } from "../../actions/herobanneractions";

const initialState = {};

function subscriptionRequested(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUBSCPTION_REQUESTED:
      return { ...state, emialaddress: action.payload };
    case actionTypes.RESET_SUBSCRIPTION:
      return { ...state, emialaddress: "" };
    default:
      return state;
  }
}

export default subscriptionRequested;
