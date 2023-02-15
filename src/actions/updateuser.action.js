import { types } from '../constants/updateuser.constants';
import { updateUserInfoService } from '../services/updateuser.service';
import { getuserinformationAction } from './getuserinformation.action';
import { showErrorAlertAction } from './erroralert.action';


export const updateUserInfoAction = {
    updateUserInfo,
};

function updateUserInfo(payload) {
    return (dispatch) => {
        dispatch(request(payload));
        updateUserInfoService.updateUserInfo(payload).then(
            (response) => {
                dispatch(success(response));
                dispatch(getuserinformationAction.getuserinformation());
                if (payload.phoneNumber) {
                    dispatch(showErrorAlertAction.ShowErrorAlert(`user details updated successfully`,
                        "Phone number updated"));
                }
            },
            (error) => {
                dispatch(failure(error));
                dispatch(showErrorAlertAction.ShowErrorAlert(`Something went wrong while updating profile details`,
                    "Something went wrong"));
            }
        );
    };
}
function request(payload) {
    return { type: types.UPDATE_USER_INFO_REQUESTED, payload };
}
function success(response) {
    return { type: types.UPDATE_USER_INFO_SUCCESS, response };
}
function failure(error) {
    return { type: types.UPDATE_USER_INFO_FAILURE, error };
}