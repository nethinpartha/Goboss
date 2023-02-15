import { types } from "../actions/searchactions";

const search = (state = {}, action) => {

  switch (action.type) {
    case types.GET_SEARCH_SUCCESS:
      return { ...state, ...action, loading: false };
    case types.GET_SEARCH_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default search;
