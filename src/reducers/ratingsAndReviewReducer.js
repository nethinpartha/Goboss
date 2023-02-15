import types from "../constants/ratingreview.constants";

const initialState = {};

export default function ReviewsAndRatings(state = initialState, action) {
    switch (action.type) {
        case types.RATINGS_AND_REVIEW_REQUESTED:
            return {
                ...state,
                loading: true,
                error: null
            };
        case types.RATINGS_AND_REVIEW_SUCCESS:
            return {
                ...state,
                result: action.response,
                loading: false,
                error: null
            };
        case types.RATINGS_AND_REVIEW_FAILURE:
            return {
                ...state,
                result: null,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
