import { types } from "../constants/getfiltercount.constants";
import { getfiltercountService } from "../services/getfiltercount.service";

const getfiltercount = ({ filterType, keyword }) => {
  return (dispatch) => {
    if (filterType === undefined) {
      let response = { count: 0 };
      dispatch(success({ type: types.GET_FILTER_COUNT_SUCCESS, response }));
    } else {
      dispatch(request({ type: types.GET_FILTER_COUNT_REQUESTED }));
      getfiltercountService.getfiltercount({ filterType, keyword }).then(
        (response) => {
          dispatch(success({ type: types.GET_FILTER_COUNT_SUCCESS, response }));
        },
        (error) => {
          dispatch(failure({ type: types.GET_FILTER_COUNT_FAILURE, error }));
        }
      );
    }
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

export const getfiltercountAction = {
  getfiltercount,
};
