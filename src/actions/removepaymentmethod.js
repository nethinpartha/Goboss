import { types } from '../constants/removepaymentmethod';
import { removePaymentMethodService } from '../services/removepaymentmethod.service';
import { getPaymentMethodList } from './getpaymentmethods.action';

export const removePaymentMethod = {
  removePaymentMethodAction
};

function removePaymentMethodAction({ paymentMethod }) {
  return (dispatch) => {
    dispatch(request());
    removePaymentMethodService.removePaymentMet({ paymentMethod }).then(
      response => {
        dispatch(success(response));
        dispatch(getPaymentMethodList.getPaymentMethodAction());
      },
      error => {
        dispatch(failure(error));
      }
    )
  }
}

function request() {
  return { type: types.REMOVE_PAYMENT_METHOD_REQUESTED }
}

function success(response) {
  return { type: types.REMOVE_PAYMENT_METHOD_SUCCESS, response }
}

function failure(error) {
  return { type: types.REMOVE_PAYMENT_METHOD_FAILURE, error }
}
