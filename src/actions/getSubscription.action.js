import { types } from '../constants/getSubscriptionPlans';
import { subscriptionPlanService } from '../services/subscriptionplans.service';
export const getSubscriptionList = {
  getSubscriptionListAction
};

function getSubscriptionListAction() {
  return (dispatch) => {
    dispatch(request());
    subscriptionPlanService.getSubscription().then(
      response => {
        dispatch(success(response));
      },
      error => {
        dispatch(failure(failure));
      }
    )
  }
}

function request() {
  return { type: types.GET_SUBSCRIPTION_REQUESTED }
}

function success(response) {
  return { type: types.GET_SUBSCRIPTION_SUCCESS, response }
}

function failure(error) {
  return { type: types.GET_SUBSCRIPTION_FAILURE, error }
}
