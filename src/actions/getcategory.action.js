import { types } from "../constants/category.constants";
import { getCategoryListService } from "../services/getcategory.service";

const getCategoryCount = ({ permalink, id }) => {
    return (dispatch) => {
        dispatch(request({ type: types.GET_CATEGORY_DETAILS_REQUEST }));
        getCategoryListService.getCategoryList({ permalink, id }).then(
            (response) => {
                dispatch(success({ type: types.GET_CATEGORY_DETAILS_SUCCESS, response }));
            },
            (error) => {
                dispatch(failure({ type: types.GET_CATEGORY_DETAILS_FAILURE, error }));
            }
        );
    };
};

function request({ type }) {
    return { type };
}

function success({ type, response }) {
    return { type, response };
}

function failure({ type, error }) {
    return { type, error };
}

export const getCategoryAction = {
    getCategoryCount,
};
