import { types } from '../constants/getUserProfile.constants';
import { userprofiledetailsService } from '../services/getUserProfile.service';

const getuserprofile = () => {
  return (dispatch) => {
    dispatch(request());
    userprofiledetailsService.userprofiledetails().then(
      (response) => {
        dispatch(success(response));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };
};

function request() {
  return { type: types.GET_USER_PROFILE_REQUESTED };
}

function success(response) {
  return { type: types.GET_USER_PROFILE_SUCCESS, response };
}

function failure(error) {
  return { type: types.GET_USER_PROFILE_FAILURE, error };
}


export const getuserprofileAction = {
  getuserprofile,
};
