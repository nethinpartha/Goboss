import { types } from "../constants/getfilterparams.constants";

const Searchfilterparams = (state = {}, action) => {
  switch (action.type) {
    case types.GET_FILTER_PARAMS_REQUESTED:
      return { ...state, loading: true };
    case types.GET_FILTER_PARAMS_SUCCESS:
      return { ...state, result: action.response, loading: false };
    case types.GET_FILTER_PARAMS_FAILURE:
      return { ...state, loading: false, error: action.error }
    default:
      return state;
  }
};

export default Searchfilterparams;
