import { types } from '../constants/header.constants';
import { HeaderApiService } from '../services/header.service';


const headercontent = () => {
  return (dispatch) => {
    dispatch(request());
    HeaderApiService.HeaderContent().then(
      response => {
        dispatch(success(response));
        sessionStorage.setItem('setheadercontent', true);
      },
      error => {
        dispatch(failure(error))
      }
    )
  }
}

function request() {
  return { type: types.GET_HEADER_CONTENT_REQUEST }
}

function success(response) {
  return { type: types.GET_HEADER_CONTENT_SUCCESS, response }
}

function failure(error) {
  return { type: types.GET_HEADER_CONTENT_FAILURE, error }
}

export const headercontentaction = {
  headercontent
}