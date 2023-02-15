import { types } from "../constants/category.constants";

const initialState = {};

function CategoryReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_CATEGORY_DETAILS_REQUEST:
            return { ...state, loading: true, response: action.response };
        case types.GET_CATEGORY_DETAILS_SUCCESS:
            return { ...state, loading: false, response: action.response };
        case types.GET_CATEGORY_DETAILS_FAILURE:
            return { ...state, loading: false, response: action.error };
        default:
            return state;
    }
}

export default CategoryReducer;
