import { types } from "../constants/userrating.constants";
import { userRatingService } from "../services/userrating.service";
import { showErrorAlertAction } from './erroralert.action';
import { ratingsreview } from './ratingreview.action';

export const userRatingAction = {
    userRating,
};

function userRating(payload) {
    let { contentId } = payload;
    return (dispatch) => {
        dispatch(request({}));
        userRatingService.userRating(payload).then(
            (user) => {
                dispatch(success(user));
                if (payload) {
                    dispatch(ratingsreview.ratingsreviewAAction({ contentId }))
                }
                dispatch(showErrorAlertAction.ShowErrorAlert(`Review added successfully`, 'Success',));

            },
            (error) => {
                dispatch(failure(error));
                dispatch(showErrorAlertAction.ShowErrorAlert(`Something went wrong`, 'error while adding the review'));
            }
        );
    };
}
function request(user) {
    return { type: types.USER_RATING_ADD_REQUESTED, user };
}
function success(user) {
    return { type: types.USER_RATING_ADD_SUCCESS, user };
}
function failure(error) {
    return { type: types.USER_RATING_ADD_FAILURE, error };
}
