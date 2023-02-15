import { type } from '../constants/geolocation.constants';
import { geoLocationService } from '../services/getgeolicationdetails.service';

export const geoLocation = {
  getGeolocationAction
};

function getGeolocationAction() {
  return (dispatch) => {
    dispatch(request);
    geoLocationService.getGeolocation().then(
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
  return { type: type.GET_GEOLOCATION_REQUESTED }
}

function success(response) {
  return { type: type.GET_GEOLOCATION_SUCCESS, response }
}

function failure(error) {
  return { type: type.GET_GEOLOCATION_FAILURE, error }
}
