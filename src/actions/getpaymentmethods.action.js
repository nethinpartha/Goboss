import { types } from '../constants/getpaymentmethod.constants';
import { getPaymentMethodService } from '../services/getpaymentmethods.service';


export const getPaymentMethodList = {
  getPaymentMethodAction
};

function getPaymentMethodAction() {
  return (dispatch) => {
    dispatch(request());
    getPaymentMethodService.getPaymentMethods().then(
      response => {
        dispatch(success(response));
      },
      error => {
        dispatch(failure(error));
      }
    )
  }
}

function request() {
  return { type: types.GET_PAYMENT_METHOD_REQUESTED }
}

function success(response) {
  return { type: types.GET_PAYMENT_METHOD_SUCCESS, response }
}

function failure(error) {
  return { type: types.GET_PAYMENT_METHOD_FAILURE, error }
}
