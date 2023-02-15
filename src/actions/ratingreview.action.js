import types from '../constants/ratingreview.constants';
import { reviewsAndRatingsService } from '../services/ratingsAndReview.service';

export const ratingsreview = {
    ratingsreviewAAction
};

function ratingsreviewAAction({ contentId }) {
    return (dispatch) => {
        dispatch(request());
        reviewsAndRatingsService.reviewsAndRatings({ contentId }).then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(error));
            }
        )
    }
}

function request() {
    return { type: types.RATINGS_AND_REVIEW_REQUESTED }
}

function success(response) {
    return { type: types.RATINGS_AND_REVIEW_SUCCESS, response }
}

function failure(error) {
    return { type: types.RATINGS_AND_REVIEW_FAILURE, error }
}
