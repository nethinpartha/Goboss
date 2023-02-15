
import { types } from '../constants/getfilterparams.constants';
import { getfilterparamsService } from '../services/getfilterparams.service';

const getfilterparam = (filterType) => {
  return (dispatch) => {

    dispatch(request({ type: types.GET_FILTER_PARAMS_REQUESTED }));
    getfilterparamsService.getfilterparams(filterType).then((response) => {
      dispatch(success({ type: types.GET_FILTER_PARAMS_SUCCESS, response }));
    },
      (error) => {
        dispatch(failure({ type: types.GET_FILTER_PARAMS_FAILURE, error }))
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

export const getfilterparamseviceAction = {
  getfilterparam
};
