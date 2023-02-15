import { types } from '../constants/updatepaymentmethod.constants';
import { updatePaymentMethodService } from '../services/updatepaymentmethod';
import { getPaymentMethodList } from './getpaymentmethods.action';


export const updatePaymentMtdAction = {
  updatePaymentMtd
};

function updatePaymentMtd({ updateCardDetails }) {
  return (dispatch) => {
    dispatch(request());
    updatePaymentMethodService.updatePaymentMethod({ updateCardDetails }).then(
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
  return { type: types.UPDATE_PAYMENT_METHOD_REQUESTED }
}

function success(response) {
  return { type: types.UPDATE_PAYMENT_METHOD_SUCCESS, response }
}

function failure(error) {
  return { type: types.UPDATE_PAYMENT_METHOD_FAILURE, error }
}
