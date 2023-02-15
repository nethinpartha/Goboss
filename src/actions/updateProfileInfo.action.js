
import { types } from "../constants/updateprofile.constants";
import { updateProfileInfoService } from "../services/updateprofileinfo.service";
import { getuserprofileAction } from './getUserProfile.action';
import { showErrorAlertAction } from './erroralert.action';

export const updateProfileInfoAction = {
  updateProfileInfo,
};

function updateProfileInfo(payload) {
  return (dispatch) => {
    dispatch(request(payload));
    updateProfileInfoService.updateProfileInfoMet(payload).then(
      (response) => {
        dispatch(success(response));
        if (payload.phoneNumber) {
          dispatch(showErrorAlertAction.ShowErrorAlert(`user details updated successfully`, "Success!"));
        }
        dispatch(getuserprofileAction.getuserprofile());
      },
      (error) => {
        dispatch(failure(error));
        dispatch(showErrorAlertAction.ShowErrorAlert(`Something went wrong while updating profile details`, "Something went wrong"));
      }
    );
  };
}
function request(payload) {
  return { type: types.UPDATE_PROFILE_INFO_REQUESTED, payload };
}
function success(response) {
  return { type: types.UPDATE_PROFILE_INFO_SUCCESS, response };
}
function failure(error) {
  return { type: types.UPDATE_PROFILE_INFO_FAILURE, error };
}
