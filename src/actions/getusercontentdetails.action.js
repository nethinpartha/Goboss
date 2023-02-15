import { types } from '../constants/getusercontent.constants';
import { usercontentdetailsService } from '../services/getusercontentdetails.service';
import { showErrorAlertAction } from './erroralert.action';

// get the user specific content details based on id
const getusercontentdetails = (contentId) => {
  return (dispatch) => {
    dispatch(request(contentId));
    usercontentdetailsService.usercontentdetails(contentId).then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
        // dispatch(showErrorAlertAction.ShowErrorAlert(error.toString()))
      }
    );
  };
};

function request(id) {
  return { type: types.GET_USER_CONTENT_DETAILS_REQUEST, id };
}

function success(response) {
  return { type: types.GET_USER_CONTENT_DETAILS_SUCCESS, response };
}

function failure(error) {
  return { type: types.GET_USER_CONTENT_DETAILS_FAILURE, error };
}


export const getusercontentdetailsAction = {
  getusercontentdetails,
};
