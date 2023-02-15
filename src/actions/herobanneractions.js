import { signInConstants } from "../constants/userauthconstants";

export const actionTypes = {
  SUBSCPTION_REQUESTED: "SUCBSCRIPTION_REQUESTED",
  RESET_SUBSCRIPTION: "RESET_SUBSCRIPTION",
};

export const subscribeAction = {
  subscriptionRequested,
  resetSignUpParams,
};

function subscriptionRequested(emailaddress) {
  return (dispatch) => {
    dispatch(subscription(emailaddress));
  };
}

function subscription(payload) {
  return { type: actionTypes.SUBSCPTION_REQUESTED, payload };
}

// Reset SignUp
function resetSignUpParams() {
  return { type: signInConstants.RESET_SIGIN };
}
