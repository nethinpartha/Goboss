import { types } from '../constants/footer.constants';
import { FooterApiService } from '../services/footerapi.service';


const footercontent = () => {
  return (dispatch) => {
    dispatch(request());
    FooterApiService.footerContent().then(
      response => {
        dispatch(success(response));
        sessionStorage.setItem('setfootercontent', true);
      },
      error => {
        dispatch(failure(error.toString()))
      }
    )
  }
}

function request() {
  return { type: types.GET_FOOTER_CONTENT_REQUEST }
}

function success(response) {
  return { type: types.GET_FOOTER_CONTENT_SUCCESS, response }
}

function failure(error) {
  return { type: types.GET_FOOTER_CONTENT_FAILURE, error }
}

export const footercontentaction = {
  footercontent
}