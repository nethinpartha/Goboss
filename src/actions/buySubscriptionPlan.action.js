import { types } from '../constants/buysubscription.constants';
import { buySubscriptionService } from '../services/buysubscription.service';
import { getuserinformationAction } from './getuserinformation.action';


export const buySubscriptionPlan = {
  buySubscriptionPlanAction
};

function buySubscriptionPlanAction({ planId, paymentMethod, billingDetails, cb }) {
  return (dispatch) => {
    dispatch(request());
    buySubscriptionService.purchaseSubscription({ planId, paymentMethod, billingDetails }).then(
      response => {
        dispatch(success(response));
        dispatch(getuserinformationAction.getuserinformation());
        cb(undefined, response);
      },
      error => {
        dispatch(failure(error));
        cb(error, undefined);
      }
    )
  }
}

function request() {
  return { type: types.BUY_SUBSCRIPTION_PLAN_REQUESTED }
}

function success(response) {
  return { type: types.BUY_SUBSCRIPTION_PLAN_SUCCESS, response }
}

function failure(error) {
  return { type: types.BUY_SUBSCRIPTION_PLAN_FAILURE, error }
}
