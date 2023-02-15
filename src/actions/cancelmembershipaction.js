import { pathOr } from 'ramda';
import { cancelsubscriptionService } from "../services/cancelsubscription.service";
import { showErrorAlertAction } from './erroralert.action';
import { getuserinformationAction } from '../actions/getuserinformation.action';
import { type } from "../constants/cancelsubscriptionconstants";

const cancelsubscriptionrequest = (briefinfo, cancellationreason) => {
  return (dispatch) => {
    dispatch(request(briefinfo));
    cancelsubscriptionService
      .cancelsubscription(briefinfo, cancellationreason)
      .then(
        (response) => {
          dispatch(success(response));
          dispatch(getuserinformationAction.getuserinformation());
        },
        (error) => {
          let errorMessage = pathOr('', ['message'])(error);
          dispatch(showErrorAlertAction.ShowErrorAlert(errorMessage ? `Email validation failure - ${errorMessage}` : `${error}`, "Something went wrong"));
          dispatch(failure(error));
        }
      );
  };
};

function request(briefinfo) {
  return { type: type.CANCEL_SUBSCRIPTION_REQUEST_REQUEST, briefinfo };
}

function success(response) {
  return { type: type.CANCEL_SUBSCRIPTION_REQUEST_SUCCESS, response };
}

function failure(error) {
  return { type: type.CANCEL_SUBSCRIPTION_REQUEST_FAILURE, error };
}

export const cancelsubscription = {
  cancelsubscriptionrequest,
};
