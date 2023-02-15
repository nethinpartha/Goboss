import { types } from "../constants/getfiltercount.constants";

const Searchfiltercount = (state = {}, action) => {
  switch (action.type) {
    case types.GET_FILTER_COUNT_REQUESTED:
      return { ...state, loading: true };
    case types.GET_FILTER_COUNT_SUCCESS:
      return { ...state, result: action.response, loading: false };
    case types.GET_FILTER_COUNT_FAILURE:
      return { ...state, loading: false, error: action.error }
    case types.RESET_FILTER_COUNT:
      return { ...state, loading: false, result: null }
    default:
      return state;
  }
};

export default Searchfiltercount;
